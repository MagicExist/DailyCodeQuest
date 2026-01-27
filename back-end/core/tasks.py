from celery import shared_task
from django.utils import timezone
import random

from .models import ShuffleChallenge, DailyChallenge, Challenge


@shared_task
def shuffle_daily_quest():
    """
    Selects and stores the daily challenge using a persistent shuffle state.

    This task runs once per day and performs the following steps:
    1. Prevents duplicate execution for the same day.
    2. Initializes the shuffle state if it does not exist.
    3. Selects a random challenge from the remaining pool.
    4. Stores the selected challenge as today's DailyChallenge.
    5. Updates and persists the remaining shuffle state.

    The shuffle guarantees that all challenges are used once before
    restarting the cycle.
    """
    # Get today's date (used as uniqueness key for DailyChallenge)
    today = timezone.now().date()

    # Prevent multiple executions for the same day
    if DailyChallenge.objects.filter(date=today).exists():
        return

    # Retrieve or create the global shuffle state (single-row table)
    shuffle, created = ShuffleChallenge.objects.get_or_create(id=1)

    # Initialize shuffle lists on first creation
    if created:
        challenge_ids = list(
            Challenge.objects.values_list("id", flat=True)
        )
        shuffle.original_list = challenge_ids
        shuffle.dynamic_list = challenge_ids.copy()
        shuffle.save()

    # Work with the remaining (dynamic) list
    items = shuffle.dynamic_list

    # If all challenges were used, restart the shuffle cycle
    if not items:
        shuffle.dynamic_list = shuffle.original_list.copy()
        shuffle.save()
        items = shuffle.dynamic_list

    # Select a random challenge index
    index = random.randint(0, len(items) - 1)

    # Remove the selected challenge from the remaining pool
    challenge_id = items.pop(index)

    # Fetch the Challenge instance
    challenge = Challenge.objects.get(id=challenge_id)

    # Create today's DailyChallenge entry
    DailyChallenge.objects.get_or_create(
        date=today,
        defaults={"challenge": challenge}
    )

    # Persist the updated shuffle state
    shuffle.dynamic_list = items
    shuffle.save()
