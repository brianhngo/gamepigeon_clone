from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .models import User,Match
from .serializer import UserSerializer, MatchSerializer
import json

@api_view(['GET'])
def get_user(request):
  return Response(UserSerializer({ 'user_id' : "1A", 'username' : "brianhngo",'password' : "123", 'record' : "1W-0L", "mmr": 123 }).data)

@api_view(['POST'])
def create_user(request):
  try:  
    body = json.loads(request.body)
    email = body.get('email')
    password1 = body.get('password1')
    password2 = body.get('password2')
    
    if not email or not password1 or not password2: 
      return Response({"error": "Email and password are required"}, status = 400)
    
    if password1 != password2:
      return Response({'error': 'Password do not match'}, status = 400)

    new_user = UserSerializer(data={
            'username': email, 
            'password': password1,
        })
 

    if (new_user.is_valid()):
      
      new_user.save()
      return Response(new_user.data, status = 201)
    
    return Response(new_user.errors, status = 400)
  except json.JSONDecodeError:
    return Response({"Error" : 'Server is down'}, status = 500)


@api_view(['GET'])
def get_Users(request):
  try:
    users_list = User.objects.all()
    return Response(UserSerializer(users_list, many = True).data, status=200)
  except json.JSONDecodeError:
       return Response({"Error" : 'Server is down'}, status = 500)