from django.urls import path

from friend.views import ListFriendAPIView, SendFriendRequestView, GetPatchDeleteFriendRequest

urlpatterns = [
    path('', ListFriendAPIView.as_view()),
    path('request/<int:user_id>/', SendFriendRequestView.as_view()),
    path('requests/<int:friend_request_id>/', GetPatchDeleteFriendRequest.as_view()),
]
