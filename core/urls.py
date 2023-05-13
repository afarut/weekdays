from django.urls import path
from core import views


app_name = "core"

urlpatterns = [
    path("auth/", views.auth_request, name="auth_request"),
    path("i_am/", views.i_am, name="i_am"),
]
