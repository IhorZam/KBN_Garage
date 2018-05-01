from django.contrib.auth.models import User
from django.db import models
import random
import string


class SessionManager(models.Manager):
    @staticmethod
    def authentificate(username, password):
        if User.objects.filter(username=username).exists():
            user = User.objects.get(username=username)
            if user.check_password(password):
                session = Session()
                session.user = user
                session.key = "".join(random.choice(string.ascii_letters) for _ in range(64))
                session.save()
                return session.key
        return None

    @staticmethod
    def exit(session):
        session.delete()


class Session(models.Model):
    key = models.CharField(unique=True, max_length=64)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    objects = SessionManager()


def add_user(username, password, email, phone):
    user = User.objects.create_user(username=username, password=password, email=email)
    user.save()
    disp = Phone.objects.create(num=phone, user=user)
    disp.save()


class Phone(models.Model):
    num = models.CharField(max_length=16)
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Request(models.Model):
    title = models.CharField(max_length=32)
    descr = models.CharField(max_length=512)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=16)
