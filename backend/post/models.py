from django.conf import settings
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    text_content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # oneToMany
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='posts', on_delete=models.CASCADE)
    # ManyToMany
    liked_by = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='liked_posts', verbose_name='liked by',
                                      blank=True)

    def __str__(self):
        title = f'{self.title[:30]}...' if len(self.title) > 30 else self.title
        return f'Post {self.pk}: {title} by {self.author.username}'
