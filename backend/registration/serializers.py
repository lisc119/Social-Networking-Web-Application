from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class RegistrationValidationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']
