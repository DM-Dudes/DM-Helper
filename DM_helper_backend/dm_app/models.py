from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
        
class DMTable(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    story = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.name
    
class Player(models.Model):
    name = models.CharField(max_length=255)
    details = models.TextField()
    dmtable = models.ForeignKey(DMTable, on_delete=models.CASCADE, related_name='dmtablePlayer')

    def __str__(self):
        return self.name

class NPC(models.Model):
    name = models.CharField(max_length=255)
    dmtable = models.ForeignKey(DMTable, on_delete=models.CASCADE, related_name='dmtableNPC')
    hp = models.CharField(max_length=255)
    ac = models.CharField(max_length=255)
    details = models.CharField(max_length=255)

    def __str__(self):
        return self.name
