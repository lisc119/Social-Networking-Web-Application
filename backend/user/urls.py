from django.urls import path

from user.views import UserListAPIView, ToggleFollow, GetFollowers, GetFollowings, UserProfileView, \
    UserRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('users/', UserListAPIView.as_view()),
    path('users/<int:id>/', UserRetrieveUpdateDestroyAPIView.as_view()),
    path('users/me/', UserProfileView.as_view()),
    path('social/followers/toggle-follow/<int:id>/', ToggleFollow.as_view()),
    path('social/followers/following/', GetFollowings.as_view()),
    path('social/followers/followers/', GetFollowers.as_view()),
]
