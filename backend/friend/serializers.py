from rest_framework import serializers
from user.serializers import UserFriendSerializer
from django.contrib.auth import get_user_model

from friend.models import Friend

User = get_user_model()


class FriendSerializer(serializers.ModelSerializer):
    sender = UserFriendSerializer()
    receiver = UserFriendSerializer()

    class Meta:
        model = Friend
        fields = '__all__'
