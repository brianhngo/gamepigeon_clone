from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .models import User,Match
from .serializer import UserSerializer, MatchSerializer
from django.contrib.auth.hashers import make_password, check_password
import json
from .utils import  generate_jwt, decode_jwt


# User
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
            'password': make_password(password1),
        })
 

    if (new_user.is_valid()):
      
      new_user.save()
      return Response(new_user.data, status = 201)
    
    return Response(new_user.errors, status = 400)
  except json.JSONDecodeError:
    return Response({"Error" : 'Server is down'}, status = 500)

@api_view(['POST'])
def login_User(request):
  try:
    body = json.loads(request.body)
    email = body.get('email')
    password = body.get('password')

    if (not email or not password):
      return Response({"Error" : 'Email and password are required'}, status = 400)
    
    user_info = User.objects.filter(username = email).first()

    if user_info:
      is_validated = check_password(password,user_info.password)
      if is_validated:
        user_token = generate_jwt(user_info)
       
        return Response({'token':user_token}, status = 200)
    else :
      return Response({"Error": "Invalid credentials"}, status=401)
  except json.JSONDecodeError:
     return Response({"Error" : 'Server is down'}, status = 500)

@api_view(['GET'])
def get_Users(request):
  try:
    users_list = User.objects.all()
    return Response(UserSerializer(users_list, many = True).data, status=200)
  except json.JSONDecodeError:
       return Response({"Error" : 'Server is down'}, status = 500)
  


# Game 



# Global queues for specific games
regCheckers_queue = []  # For Checkers queue
regChess_queue = []  # For Chess queue


def get_game_queue(game):
    if game == 'checkers':
        return regCheckers_queue
    elif game == 'chess':
        return regChess_queue
    else:
        return None

@api_view(['POST'])
def join_game(request):
    try:
        body = json.loads(request.body)
        game = body.get('game')
        opponent = body.get('opponent')
        difficulty = body.get('difficulty')
        user = body.get('user')

        if not game:
            return Response({'Error': 'Error! Game must be selected'}, status=400)

        if opponent == 'AI':
            # AI match setup
            newMatch = MatchSerializer(data={
                'game': game,
                'users': {
                    'user1': user,
                    'user2': difficulty  # AI difficulty
                },
                'winner': '',
                'loser': ''
            })

            if newMatch.is_valid():
                newMatch.save()
                return Response(newMatch.data, status=201)  
            else:
                return Response(newMatch.errors, status=400)

        else:
            # For PVP games, get the corresponding queue based on game type
            game_queue = get_game_queue(game)
            
            if game_queue is None:
                return Response({"Error": "Invalid game type selected!"}, status=400)

            if len(game_queue) > 0:
                # Matchmaking: pop from queue and start game
                opponent_user = game_queue.pop(0)  # Match with the first player in the queue

                newMatch = MatchSerializer(data={
                    'game': game,
                    'users': {
                        'user1': user,
                        'user2': opponent_user
                    },
                    'winner': '',
                    'loser': ''
                })

                if newMatch.is_valid():
                    newMatch.save()
                    return Response(newMatch.data, status=201)
                else:
                    return Response(newMatch.errors, status=400)
            
            # Add user to the queue
            game_queue.append(user)
            return Response({'message': 'Added to the queue!', 'queue_length': len(game_queue)}, status=200)

    except json.JSONDecodeError:
        return Response({"Error": "Invalid JSON format"}, status=400)

    except Exception as e:
        return Response({"Error": str(e)}, status=500)

    