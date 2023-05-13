from django.shortcuts import render


def auth_request(request):
    return render(request, "core/login.html")


def i_am(request):
    return render(request, "core/area.html")
