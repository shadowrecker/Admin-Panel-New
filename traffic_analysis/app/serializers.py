from rest_framework import serializers
from .models import Video, Report, Alert, Analytics, Profile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    custom_id = serializers.CharField(source='profile.custom_id', read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'custom_id')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        Profile.objects.create(user=user)
        return user

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'title', 'video', 'upload_date', 'user', 'detected_objects', 'lane_violations', 'traffic_density', 'system_performance')
        read_only_fields = ('upload_date', 'user')

class AlertSerializer(serializers.ModelSerializer):
    video_title = serializers.CharField(source='video.title', read_only=True)

    class Meta:
        model = Alert
        fields = ('id', 'description', 'timestamp', 'severity', 'video', 'video_title')
        read_only_fields = ('timestamp',)

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'

class AnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = '__all__'