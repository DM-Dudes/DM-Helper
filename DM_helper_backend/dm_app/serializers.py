from rest_framework import serializers
from .models import User, DMTable, Player, NPC

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields= ['user_id', 'name', 'password']

class DMTableSerializer(serializers.ModelSerializer):
    class Meta: 
        model = DMTable
        fields= ['dmtable_id', 'name', 'userdmtable', 'story', 'notes']

class PlayerSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Player
        fields= ['player_id', 'name', 'dmtable', 'details']

class NPCSerializer(serializers.ModelSerializer):
    class Meta: 
        model = NPC
        fields= ['npc_id', 'name', 'dmtable', 'hp', 'ac', 'details']
        