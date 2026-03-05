from rest_framework import serializers
from .models import Challenge, Achievement, User, Tag, DailyChallenge

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email','password','username']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'

class ChallengeSerializer(serializers.ModelSerializer):
    achievement = AchievementSerializer(many=True, read_only=True)
    class Meta:
        model = Challenge
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"

class DailyChallengeSerializer(serializers.ModelSerializer):
    challenge = ChallengeSerializer()
    class Meta:
        model = DailyChallenge
        fields = ['challenge','date']