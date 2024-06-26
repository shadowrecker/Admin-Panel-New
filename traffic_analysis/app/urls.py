from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register),
    path('stats/overview', views.overview_statistics),
    path('alerts/recent', views.recent_alerts),
    path('videos/upload/', views.upload_video),
    path('videos/history/', views.video_history),
    path('videos/', views.video_list),
    path('videos/<int:pk>/', views.video_detail),
    path('alerts/', views.alert_list),
    path('alerts/<int:pk>/', views.alert_detail),
    path('users/', views.user_list, name='user-list'),
    path('users/<int:pk>/', views.user_detail, name='user-detail'),
    path('stats/overview/', views.overview_statistics, name='overview-statistics'),
    path('reports/', views.report_list, name='report-list'),
    path('reports/<int:pk>/', views.report_detail, name='report-detail'),
    path('analytics/', views.analytics_overview, name='analytics-overview'),
    path('processor/realtime_feed/', views.realtime_feed, name='realtime-feed'),
    path('analytics/<int:pk>/', views.analytics_detail, name='analytics-detail'),
]


