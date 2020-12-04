from django.urls import path

from registration.views import RegistrationView, RegistrationValidationView

urlpatterns = [
    path('', RegistrationView.as_view()),
    path('validation/', RegistrationValidationView.as_view()),
]
