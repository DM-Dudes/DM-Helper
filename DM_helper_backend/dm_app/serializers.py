from rest_framework import serializers
from .models import User, DMTable

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields= ['name', 'password']

class DMTableSerializer(serializers.ModelSerializer):
    class Meta: 
        model = DMTable
        fields= ['name', 'user', 'story', 'notes']