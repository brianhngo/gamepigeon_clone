# This will contain decode/create jwt utility function

import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from datetime import datetime, timedelta, timezone
from django.conf import settings


def generate_jwt(user):

  token_payload = {
    'user_id': user.id,
    'username': user.username,
   
  }

  token = jwt.encode(token_payload, settings.SECRET_KEY, algorithm= 'HS256')
  return token

def decode_jwt(token):
    try:
        decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        return decoded 
    except ExpiredSignatureError:
        return None  
    except InvalidTokenError:
        return None 
    
