from django.shortcuts import render, redirect
from core.forms import AuthForm, UserCreateForm
from django.views.generic import TemplateView
from django.contrib.auth import logout, authenticate, login


def index(request):
    return render(request, "core/index.html", {"user": request.user})


def auth_request(request):
    return render(request, "core/login.html")


class AuthView(TemplateView):
    template_name = "core/login.html"

    def post(self, request):
        form = AuthForm(request.POST)
        data = {}
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd["username"], password=cd["password"])
            if user is None:
                data[
                    "login_errors"
                ] = "Пользователя с таким ником и паролем не существует"
            else:
                login(request, user)
                return redirect("core:index")
        else:
            data["login_errors"] = form.errors
        return render(request, self.template_name, data)


class RegView(TemplateView):
    template_name = "core/login.html"

    def post(self, request):
        form = UserCreateForm(request.POST)
        data = {}
        if form.is_valid():
            form.save()
            cd = form.cleaned_data
            user = authenticate(username=cd["username"], password=cd["password1"])
            login(request, user)
            return redirect("core:index")
        else:
            data["register_errors"] = form.errors
        return render(request, self.template_name, data)

    def get(self, request):
        return redirect("core:auth")


def logout_request(request):
    logout(request)
    return redirect("core:index")


def i_am(request):
    return render(request, "core/area.html")
