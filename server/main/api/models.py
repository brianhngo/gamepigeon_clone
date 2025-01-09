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
    winner = models.CharField(max_length=255)
    loser = models.CharField(max_length=255)
    date = models.DateField()
    def __str__(self):
        return f"Match {self.gameId} - {self.game}"

class User(models.Model):
  user_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
  username = models.CharField(max_length = 18, unique = True )
  password = models.CharField(max_length = 18, editable = True)
  record = models.TextField(max_length= 100, editable = True )
  mmr = models.IntegerField(default=0, editable= True)

  def _str_(self):
     return f"User {self.user_id} record {self.record}"
  