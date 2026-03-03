from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ChallengeViewSet, AchievementViewSet, UserViewSet, TagViewSet

router = DefaultRouter()
router.register(r'challenges', ChallengeViewSet , basename='challenge')
router.register(r'achievements',AchievementViewSet,basename='achievement')
router.register(r'tags', TagViewSet, basename='tag')

urlpatterns = [
    path('',include(router.urls)),
    path('users/',UserViewSet.as_view(),name='users')
]
