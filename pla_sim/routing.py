# pla_sim/routing.py (Unmodified from user snippet)
from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/subscriptions/', consumers.GraphQLSubscriptionConsumer.as_asgi()),
]
