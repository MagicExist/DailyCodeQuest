from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.exceptions import ValidationError
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("email is required")
        if not username:
            raise ValueError("username is required")

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self.create_user(email, username, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(
        max_length=150,
        unique=True,
        
    )
    streak = models.PositiveIntegerField(default=0)
    challenges = models.ManyToManyField(
        "Challenge",
        through='UserChallenge',
        related_name='users'
    )
    achievements = models.ManyToManyField(
        "Achievement",
        through='UserAchievement',
        related_name='users'
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"        
    REQUIRED_FIELDS = ["username"]             

    def __str__(self):
        return self.email
    
class Challenge(models.Model):
    title = models.CharField(
        max_length=75,
        unique=True
    )
    description = models.CharField(
        max_length=500,
        blank=True
    )
    conditions = models.JSONField(
        default=list,
        blank=True
    )
    image = models.ImageField(upload_to="challenge_images/") 

    def clean(self):
        """
            Validate conditions only if provided.
            No empty strings allowed.
        """
        super().clean()
        if self.conditions:
            for condition in self.conditions:
                if not condition or not condition.strip():
                    raise ValidationError({"conditions": "Empty conditions are not allowed."})
    def __str__(self):
        return self.title

class Achievement(models.Model):
    title = models.CharField(
        max_length=50,
        unique=True
    )
    image = models.ImageField(
        upload_to="achievement_images/"
    )
    conditions = models.JSONField(
        default=list
    )

    def clean(self):
        """
        Validates the 'conditions' field:
        - Ensures that at least one condition is provided.
        - Ensures that no condition is an empty string or contains only whitespace.
        """
        super().clean()
        if self.conditions:
            for condition in self.conditions:
                if not condition or not condition.strip():
                    raise ValidationError({"conditions": "Empty conditions are not allowed."})
        else: raise ValidationError({"conditions": "A condition is required"})

    def __str__(self):
        return self.title

class UserChallenge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    complete_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.challenge.title}"

class UserAchievement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    achievement = models.ForeignKey(Achievement, on_delete=models.CASCADE)
    unlocked_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.achievement.title}"