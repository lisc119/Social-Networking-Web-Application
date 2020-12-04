from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserFriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class UserSerializer(serializers.ModelSerializer):
    # followees = serializers.SerializerMethodField()
    amount_of_followers = serializers.SerializerMethodField()
    friends = serializers.SerializerMethodField()

    # friends = serializers.ReadOnlyField(many=True)  # return the value of the property (from the model)

    # def get_followees(self, obj):
    #     # followees = []
    #     for user in obj.users.all().values():
    #     #     if user == self.request.user.get('id'):
    #     #         followees.append(user.get('id'))
    #     # return followees

    def get_amount_of_followers(self, obj):
        # return User.objects.filter()
        return obj.followers.count()

    def get_friends(self, user):
        return UserFriendSerializer(self.context['request'].user.friends, many=True).data

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'followers', 'followees', 'amount_of_followers', 'friends']
