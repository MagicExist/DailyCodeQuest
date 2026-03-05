from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView,ListAPIView
from .models import Achievement, Challenge, User, Tag, DailyChallenge
from .serializers import (
    AchievementSerializer,
    ChallengeSerializer,
    UserSerializer,
    TagSerializer,
    DailyChallengeSerializer,
)

class UserViewSet(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ChallengeViewSet(ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer


class AchievementViewSet(ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer


class TagViewSet(ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class DailyChallengeView(ListAPIView):
    queryset = DailyChallenge.objects.all()
    serializer_class = DailyChallengeSerializer