from django.urls import path

from post.views import PostListCreateAPIView, PostRetrieveUpdateDestroyAPIView, ToggleLikePost, GetLikePosts, \
    GetMyPosts, GetPostsFollowing, GetFriendsPosts

urlpatterns = [
    path('', PostListCreateAPIView.as_view()),
    path('<int:id>/', PostRetrieveUpdateDestroyAPIView.as_view()),
    path('toggle-like/<int:id>/', ToggleLikePost.as_view()),
    path('likes/', GetLikePosts.as_view()),
    path('me/', GetMyPosts.as_view()),
    path('following/', GetPostsFollowing.as_view()),
    path('friends/', GetFriendsPosts.as_view())
]
