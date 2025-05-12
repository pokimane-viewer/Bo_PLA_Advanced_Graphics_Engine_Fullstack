# pla_sim/views.py
import os
import json
import bcrypt
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from strawberry.django.views import GraphQLView as StrawberryView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .schema import schema
from .ai_processor import get_beautiful_things, run_pl15_cad_upgrade

class GraphQLViewCustom(StrawberryView):
    schema = schema

@csrf_exempt
def serve_react_app(request):
    # Show advanced AI data in a <script> block
    beautiful_data = get_beautiful_things()
    index_path = os.path.join(os.path.dirname(__file__), '..', 'build', 'index.html')
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
        # Insert the beautiful_data in the client side
        html_content = html_content.replace(
            '<div id="root"></div>',
            '<div id="root"></div><script>'
            f'window.__BEAUTIFUL_DATA__ = {json.dumps(beautiful_data)};'
            '</script>'
        )
        return HttpResponse(html_content)
    return HttpResponse("<h1>No React build found. Please run npm run build.</h1>")

@csrf_exempt
def login_view(request):
    """
    Minimalistic Django login using bcrypt-hashed password. 
    In a real app, you would use Django's built-in auth system fully 
    (User model, authenticate(), login(), etc). Here is a simplified example.
    """
    if request.method == "POST":
        username = request.POST.get("username")
        raw_password = request.POST.get("password")
        if not username or not raw_password:
            return JsonResponse({"error": "Missing credentials"}, status=400)

        try:
            # If using Django's built-in user, password is hashed, e.g. 
            # 'password': make_password("mysecret", hasher='bcrypt_sha256')
            user = User.objects.get(username=username)
            stored_hashed = user.password.encode("utf-8")  # stored in DB
            # Django's default won't store raw bcrypt. 
            # This is purely an illustration:
            # If stored_hashed is a valid bcrypt, you can do:
            # if bcrypt.checkpw(raw_password.encode("utf-8"), stored_hashed):
            #   # success
            # But realistically you'd do: user = authenticate(username, raw_password)

            # Let's do a standard Django authentication approach:
            user_auth = authenticate(username=username, password=raw_password)
            if user_auth:
                login(request, user_auth)
                return JsonResponse({"message": "Login successful"})
            else:
                return JsonResponse({"error": "Invalid credentials"}, status=401)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)
    return JsonResponse({"message": "Use POST to submit credentials."})

@csrf_exempt
def run_cad_upgrade(request):
    """
    Endpoint to run the J-20 PL-15 'computationally aided design' upgrade plan
    from ai_processor.py
    """
    if request.method == "POST":
        output = run_pl15_cad_upgrade()
        return JsonResponse({"PL15_CAD_upgrade_result": output})
    return JsonResponse({"error": "Invalid request method"}, status=405)
