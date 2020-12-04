"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/auth/', include('authentication.urls')),
    path('backend/api/auth/registration/', include('registration.urls')),
    path('backend/api/social/posts/', include('post.urls')),
    path('backend/api/social/friends/', include('friend.urls')),
    path('backend/api/', include('user.urls')),
    # path('backend/api/social/followers/', include('follower.urls')),
    # path('backend/api/docs/', include_docs_urls(title='Cookbook and Recipe API', public=False, permission_classes=[]))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
