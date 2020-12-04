from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from post.models import Post
from post.serializers import PostSerializer
from post.permissions import IsAuthorOrReadPostOnly


class PostListCreateAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class PostRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated & IsAuthorOrReadPostOnly]
    lookup_field = 'id'


class ToggleLikePost(GenericAPIView):
    """
    patch:
    Toggle like post by logged in user
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        user = self.request.user
        user_liked_post = user in post.liked_by.all()
        if user_liked_post:
            post.liked_by.remove(user)
        else:
            post.liked_by.add(user)
        return Response(self.get_serializer(post).data)


# /backend/api/social/posts/likes/
class GetLikePosts(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        posts = Post.objects.filter(liked_by=self.request.user)
        return posts


# # /backend/api/social/posts/user/<int:user_id>
# class GetUserPosts(GenericAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#
#     def get(self, request, *args, **kwargs):
#         search = kwargs.get('text')
#         queryset = self.get_queryset().filter(author__id=search)
#         # queryset = self.get_queryset().filter(author=self.kwargs['pk'])
#         serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)


class GetMyPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        posts = Post.objects.filter(author=self.request.user)
        return posts


class GetFriendsPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        posts = Post.objects.filter(author__in=self.request.user.friends)
        return posts


class GetPostsFollowing(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        followees = self.request.user.followees.all()
        posts = Post.objects.filter(author__in=followees)
        return posts
