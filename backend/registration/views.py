from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Registration
from .serializers import RegistrationSerializer, RegistrationValidationSerializer

User = get_user_model()


class RegistrationView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        email = request.data['email']
        username = request.data['email'].split('@')[0]
        new_user = User(email=email, username=username, is_active=False)
        new_user.save()
        registration = Registration(user=new_user)
        registration.save()
        return Response(status=200)


class RegistrationValidationView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationValidationSerializer

    def patch(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']
        try:
            check_validation = Registration.objects.get(code=code, user__email=email, code_used=False)
            check_validation.user.username = request.data['username']
            check_validation.user.first_name = request.data['first_name']
            check_validation.user.last_name = request.data['last_name']
            check_validation.user.set_password(request.data['password'])
            check_validation.code_used = True
            check_validation.user.is_active = True
            check_validation.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.user).data)
        except ObjectDoesNotExist:
            return Response(status=404, data=f'{code} is not valid with {email}')
