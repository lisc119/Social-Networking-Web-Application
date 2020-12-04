from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from user.models import User
from user.serializers import UserSerializer


class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'


class ToggleFollow(GenericAPIView):
    """
    patch:
    Toggle follow user by logged in user
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        following = self.get_object()
        user = self.request.user
        user_followed_following = user in following.followers.all()
        if user_followed_following:
            following.followers.remove(user)
        else:
            following.followers.add(user)
        return Response(self.get_serializer(following).data)


class GetFollowings(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        users = User.objects.filter(followers=self.request.user)
        return users


class GetFollowers(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        users = User.objects.filter(followees=self.request.user)
        return users


class UserProfileView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
