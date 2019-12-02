from rest_framework import serializers
from .models import User, DMTable, Player, NPC

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields= ['name', 'password']

class DMTableSerializer(serializers.ModelSerializer):
    class Meta: 
        model = DMTable
        fields= ['name', 'user', 'story', 'notes']

class PlayerSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Player
        fields= ['name', 'dmtable', 'details']

class NPCSerializer(serializers.ModelSerializer):
    class Meta: 
        model = NPC
        fields= ['name', 'dmtable', 'hp', 'ac', 'details']