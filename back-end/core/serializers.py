from rest_framework import serializers
from .models import Challenge,Achievement

class ChallengeSerializer(serializers.Serializer):
    class Meta:
        model = Challenge
        fields = '__all__'

