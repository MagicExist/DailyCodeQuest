from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ChallengeViewSet,AchievementViewSet,UserViewSet

router = DefaultRouter()
router.register(r'challenges', ChallengeViewSet , basename='challenge')
router.register(r'achievements',AchievementViewSet,basename='achievement')

urlpatterns = [
    path('',include(router.urls)),
    path('users/',UserViewSet.as_view(),name='users')
]
