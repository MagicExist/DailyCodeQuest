"""
Main URL configuration for the project.

This module routes:
- Django admin panel
- Core application API endpoints
- API documentation (Swagger/OpenAPI)
- JWT authentication endpoints (login & refresh)
"""

from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from core.auth_views import GoogleLogin

urlpatterns = [
    # Django admin interface
    path('admin/', admin.site.urls),

    # Main application API routes
    path('api/', include('core.urls')),

    # OpenAPI schema generation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),

    # Swagger UI documentation interface
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # Obtain JWT access + refresh tokens (login)
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    # Refresh JWT access token using refresh token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path("accounts/", include("allauth.urls")),

    path("api/auth/google/", GoogleLogin.as_view(), name="google_login"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)