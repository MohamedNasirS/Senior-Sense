from django.urls import path
from .views import test_post

urlpatterns = [
    path('test-post/', test_post, name='test-post'),
]
