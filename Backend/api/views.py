from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

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
