from rest_framework.permissions import BasePermission


class IsAuthor(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.author == request.user


class IsAuthorOrReadPostOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if (request.method == 'GET' or request.method == 'POST'):
            return True
        return obj.author == request.user
