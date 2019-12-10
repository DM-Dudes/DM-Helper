
from django.db import models
from django.core.exceptions import ValidationError


def valid_category_name(name):
    if name == None:
        raise ValidationError('This field cannot be blank.')

def valid_category_password(password):
    if password == None:
        raise ValidationError('This field cannot be blank.')


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, validators=[valid_category_name])
    password = models.CharField(max_length=100, valditators=[valid_category_password])

    def __str__(self):
        return self.name
        
class DMTable(models.Model):
    dmtable_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    userdmtable = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userdmtable')
    story = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.name
    
class Player(models.Model):
    player_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    details = models.TextField()
    dmtable = models.ForeignKey(DMTable, on_delete=models.CASCADE, related_name='dmtablePlayer')

    def __str__(self):
        return self.name

class NPC(models.Model):
    npc_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    dmtable = models.ForeignKey(DMTable, on_delete=models.CASCADE, related_name='dmtableNPC')
    hp = models.CharField(max_length=255)
    ac = models.CharField(max_length=255)
    details = models.CharField(max_length=255)

    def __str__(self):
        return self.name
