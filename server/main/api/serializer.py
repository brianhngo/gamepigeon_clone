from rest_framework import serializers
from .models import Match, User

# How data is collected/formatted
class MatchSerializer(serializers.ModelSerializer):
  class Meta:
    model = Match
    fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'