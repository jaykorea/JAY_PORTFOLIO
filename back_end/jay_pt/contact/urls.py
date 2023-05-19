from django.urls import path, include
from .views import contact  # Update the import statement

urlpatterns = [
    # Other URL patterns
    path('contact/', contact, name='contact'),  # Add the contact URL pattern
]
