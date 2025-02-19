from django.db import models
import uuid

# Models Db
class Match(models.Model):
    gameId = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    GAME_CHOICES = [
        ('chess', 'Chess'),
        ('checkers', 'Checkers'),
        ('tic_tac_toe', 'Tic Tac Toe'),
    ]
    game = models.CharField(max_length=50, choices=GAME_CHOICES)
    users = models.JSONField()
    winner = models.CharField(max_length=255,blank = True, null = True)
    loser = models.CharField(max_length=255, blank = True, null = True)
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Match {self.gameId} - {self.game}"

class User(models.Model):
  user_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
  username = models.CharField(max_length = 120, unique = True )
  password = models.CharField(max_length = 120, editable = True)
  record = models.TextField(max_length= 100, editable = True, default = '0W-0L' )
  mmr = models.IntegerField( editable= True, default = '1000')

  def __str__(self):
     return f"User {self.user_id} record {self.record}"


# Need to test User model 