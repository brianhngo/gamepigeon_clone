from django.urls import path
from .views import get_user, create_user, get_Users

urlpatterns = [
  path('users/', get_user, name = 'get_user'),
  path('users/create_user', create_user, name = 'create_user'),
  path('users/get_users', get_Users, name = 'getAll_Users' )
]