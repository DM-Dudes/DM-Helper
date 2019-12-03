
from django.urls import path, include
from .views import UserViewSet, DMTableViewSet, PlayerViewSet, NPCViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'dm_tables', DMTableViewSet, basename='dm_table')
router.register(r'players', PlayerViewSet, basename='player')
router.register(r'npcs', NPCViewSet, basename='npc')

urlpatterns = router.urls