# pla_sim/urls.py (Unmodified from user snippet)
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("graphql", views.GraphQLViewCustom.as_view(), name="graphql"),
    path('', views.serve_react_app, name='react-app'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
