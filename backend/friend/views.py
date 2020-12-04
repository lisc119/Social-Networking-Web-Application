from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView

from friend.models import Friend
from rest_framework.response import Response

from friend.serializers import FriendSerializer

User = get_user_model()


class ListFriendAPIView(ListAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer


class SendFriendRequestView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'user_id'

    def post(self, request, *args, **kwargs):
        user = request.user
        receiver = self.get_object()
        friend_request = Friend(sender=user, receiver=receiver)
        friend_request.save()
        return Response(self.get_serializer(friend_request).data)


class GetPatchDeleteFriendRequest(RetrieveUpdateDestroyAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer
    lookup_url_kwarg = 'friend_request_id'
