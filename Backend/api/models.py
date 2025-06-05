from django.db import models
from django.contrib.auth.models import User

# Optional: cleaner choice representation using enums (Django 3.0+)
class RecordType(models.TextChoices):
    VISIT = 'visit', 'Doctor Visit'
    PRESCRIPTION = 'prescription', 'Prescription'
    NOTE = 'note', 'Note'

class RoleType(models.TextChoices):
    VIEWER = 'viewer', 'Viewer'
    EDITOR = 'editor', 'Editor'

class InvitationStatus(models.TextChoices):
    PENDING = 'pending', 'Pending'
    ACCEPTED = 'accepted', 'Accepted'
    REJECTED = 'rejected', 'Rejected'

class HealthRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='health_records')
    record_type = models.CharField(max_length=20, choices=RecordType.choices)
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.record_type}) - {self.user.username}"

class Collaborator(models.Model):
    health_record = models.ForeignKey(HealthRecord, on_delete=models.CASCADE, related_name='collaborators')
    collaborator = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=RoleType.choices)

    def __str__(self):
        return f"{self.collaborator.username} as {self.role} on '{self.health_record.title}'"

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField()
    type = models.CharField(max_length=50)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"To: {self.user.username} | {self.type} | {'Read' if self.is_read else 'Unread'}"

class CollaboratorInvitation(models.Model):
    from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_invitations')
    to_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_invitations')
    health_record = models.ForeignKey(HealthRecord, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=RoleType.choices)
    status = models.CharField(max_length=10, choices=InvitationStatus.choices, default=InvitationStatus.PENDING)
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Invite from {self.from_user.username} to {self.to_user.username} for '{self.health_record.title}' - {self.status}"
