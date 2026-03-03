from django.contrib import admin
from .models import Challenge, DailyChallenge, ShuffleChallenge, Tag

# Register your models here.
admin.site.register(Challenge)
admin.site.register(DailyChallenge)
admin.site.register(ShuffleChallenge)
admin.site.register(Tag)
