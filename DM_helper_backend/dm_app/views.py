from django.shortcuts import render
from .models import User, DMTable 
from .serializers import UserSerializer, DMTableSerializer
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DMTableViewSet(viewsets.ModelViewSet):
    queryset = DMTable.objects.all()
    serializer_class = DMTableSerializer

