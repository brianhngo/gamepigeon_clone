from django.urls import path
from .views import get_user, create_user, get_Users, login_User, join_game

urlpatterns = [
  path('users/', get_user, name = 'get_user'),
  path('users/create_user', create_user, name = 'create_user'),
  path('users/get_users', get_Users, name = 'getAll_Users' ),
  path('users/login_user', login_User, name = 'login_User'),
  path('games/join', join_game, name = 'join_game'),
]