from django.contrib import admin
from .models import Challenge,DailyChallenge,ShuffleChallenge

# Register your models here.
admin.site.register(Challenge)
admin.site.register(DailyChallenge)
admin.site.register(ShuffleChallenge)