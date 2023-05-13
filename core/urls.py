from django.urls import path
from core import views


app_name = "core"

urlpatterns = [
    path("", views.index, name="index"),
    path("auth/", views.AuthView.as_view(), name="auth"),
    path("reg/", views.RegView.as_view(), name="reg"),
    path("logout/", views.logout_request, name="i_am"),
    path("i_am/", views.i_am, name="i_am"),
]
