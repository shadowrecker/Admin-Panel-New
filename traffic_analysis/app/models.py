from django.db import models
from django.contrib.auth.models import User

class Video(models.Model):
    title = models.CharField(max_length=255)
    video = models.FileField(upload_to='videos/')
    upload_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_current = models.BooleanField(default=False)
    
    # Fields for statistics
    detected_objects = models.IntegerField(default=0)
    lane_violations = models.IntegerField(default=0)
    traffic_density = models.CharField(max_length=50, default='Low')  
    system_performance = models.CharField(max_length=50, default='Good') 

    def __str__(self):
        return self.title

class Alert(models.Model):
    description = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    severity = models.CharField(max_length=50, default='Low')  # Default value
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='alerts')

    def __str__(self):
        return self.description

class Report(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='reports')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Analytics(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='analytics')
    analysis_type = models.CharField(max_length=100) 
    result = models.JSONField() 
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.analysis_type} for {self.video.title}"
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    custom_id = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.custom_id