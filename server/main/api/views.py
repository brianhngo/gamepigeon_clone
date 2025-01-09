from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User,Match
from .serializer import UserSerializer, MatchSerializer

@api_view(['GET'])
def get_user(request):
  return Response(UserSerializer({ 'user_id' : "1A", 'username' : "brianhngo",'password' : "123", 'record' : "1W-0L", "mmr": 123 }).data)


