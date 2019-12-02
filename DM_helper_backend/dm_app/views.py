from django.shortcuts import render
from .models import User, DMTable, Player, NPC
from .serializers import UserSerializer, DMTableSerializer, PlayerSerializer, NPCSerializer
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DMTableViewSet(viewsets.ModelViewSet):
    queryset = DMTable.objects.all()
    serializer_class = DMTableSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class NPCViewSet(viewsets.ModelViewSet):
    queryset = NPC.objects.all()
    serializer_class = NPCSerializer

