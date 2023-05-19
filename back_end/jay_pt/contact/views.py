from django.core.mail import send_mail
from django.http import JsonResponse
import json

def contact(request):
    if request.method == 'POST':
        # Extract form data
        # Parse the request body data
        data = json.loads(request.body.decode('utf-8'))
        name = data.get('firstName') + ' ' + data.get('lastName')
        email = data.get('email')
        phone = data.get('phone')
        message = data.get('message')


        # Send email
        send_mail(
            'Contact Form Submission',
            f'Name: {name}\nEmail: {email}\nMobile: {phone}\nMessage: {message}',
            'jhjo9719@gmail.com',  # Sender's email address
            ['jhjo9719@gmail.com'],  # Recipient's email address
            fail_silently=False,
        )

        # Return a JSON response indicating success
        return JsonResponse({'status': 'success'})
    else:
        return JsonResponse({'status': 'error'})
