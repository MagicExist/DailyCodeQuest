from rest_framework import serializers
from .models import Challenge,Achievement,User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email','password','username','streak']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    

class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = '__all__'

class AchievementSerializer(serializers.Serializer):
    class Meta:
        model = Achievement
        fields = '__all__'

