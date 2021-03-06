# Generated by Django 3.0.3 on 2020-10-20 14:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import registration.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('code', models.CharField(default=registration.models.code_generator, max_length=5)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='registration', serialize=False, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
