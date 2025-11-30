from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    Regular user -> default
    Staff        -> is_staff=True
    Admin        -> is_superuser=True
    """

    pass
