# Generated by Django 3.0.3 on 2020-10-21 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='code_used',
            field=models.BooleanField(default=False),
        ),
    ]
