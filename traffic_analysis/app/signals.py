from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Profile

@receiver(pre_save, sender=Profile)
def generate_custom_id(sender, instance, **kwargs):
    if not instance.custom_id:
        last_profile = Profile.objects.all().order_by('id').last()
        if last_profile:
            last_id = int(last_profile.custom_id[1:])
            new_id = last_id + 1
        else:
            new_id = 1

        access_type = 'A'  # Set this based on access and authority
        instance.custom_id = f"{access_type}{new_id:05d}"
