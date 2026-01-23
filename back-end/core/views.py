from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView
from .models import Achievement,Challenge,User
from .serializers import AchievementSerializer,ChallengeSerializer,UserSerializer

class UserViewSet(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ChallengeViewSet(ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer


class AchievementViewSet(ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

