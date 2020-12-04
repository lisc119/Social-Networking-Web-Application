from django.db import models
from django.conf import settings


class Friend(models.Model):
    choices = [('p', 'Pending'), ('a', 'Accepted'), ('r', 'Rejected')]

    sender = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='requests_sent', on_delete=models.CASCADE)
    receiver = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='requests_received',
                                 on_delete=models.CASCADE)

    status = models.CharField(max_length=1, choices=choices, default='p')

    class Meta:
        unique_together = ['sender', 'receiver']

    def __str__(self):
        return f'Friend request from {self.sender.username} to {self.receiver.username}-{self.status}'
