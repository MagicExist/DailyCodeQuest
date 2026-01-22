from rest_framework.viewsets import ModelViewSet
from .models import Achievement,Challenge
from .serializers import AchievementSerializer,ChallengeSerializer

class ChallengeViewSet(ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer


class AchievementViewSet(ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

