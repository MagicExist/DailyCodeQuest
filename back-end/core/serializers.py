from rest_framework import serializers
from .models import Challenge,Achievement

class ChallengeSerializer(serializers.Serializer):
    class Meta:
        model = Challenge
        fields = '__all__'

class AchievementSerializer(serializers.Serializer):
    class Meta:
        model = Achievement
        fields = '__all__'

