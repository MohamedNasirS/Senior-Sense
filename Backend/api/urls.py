from django.urls import path
from .views import RegisterView,ElderProfileView, EmergencyContactListCreateView, EmergencyContactDeleteView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('elder-profile/', ElderProfileView.as_view(), name='elder-profile'),
    path('emergency-contacts/', EmergencyContactListCreateView.as_view(), name='emergency-contact-list-create'),
    path('emergency-contacts/<int:pk>/', EmergencyContactDeleteView.as_view(), name='emergency-contact-delete'),
]
