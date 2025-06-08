from rest_framework import generics,permissions
from .serializers import RegisterSerializer,ElderProfileSerializer, EmergencyContactSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import ElderProfile, EmergencyContact

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

@csrf_exempt  # Disable CSRF just for quick testing (don't use in production)
def test_post(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except Exception:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        return JsonResponse({'received_data': data})
    else:
        return JsonResponse({'message': 'Send a POST request with JSON data'}, status=200)


class ElderProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = ElderProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        profile, created = ElderProfile.objects.get_or_create(user=self.request.user)
        return profile

class EmergencyContactListCreateView(generics.ListCreateAPIView):
    serializer_class = EmergencyContactSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return EmergencyContact.objects.filter(profile__user=self.request.user)

    def perform_create(self, serializer):
        profile, created = ElderProfile.objects.get_or_create(user=self.request.user)
        serializer.save(profile=profile)

class EmergencyContactDeleteView(generics.DestroyAPIView):
    serializer_class = EmergencyContactSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return EmergencyContact.objects.filter(profile__user=self.request.user)