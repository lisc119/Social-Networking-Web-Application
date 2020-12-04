from django.contrib.auth import get_user_model
from rest_framework import serializers

from post.models import Post
from user.serializers import UserSerializer

User = get_user_model()


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(
        required=False,
        read_only=True
    )  # show the details of the author

    # amount_of_posts = serializers.SerializerMethodField()

    # @staticmethod
    # def get_amount_of_posts(obj):
    #     result = 0
    #     for post in obj.post.all().values():
    #         result += 1
    #     return result

    class Meta:
        model = Post
        fields = ['id', 'author', 'title', 'text_content', 'created', 'updated', 'liked_by']
        read_only_fields = ['author']
