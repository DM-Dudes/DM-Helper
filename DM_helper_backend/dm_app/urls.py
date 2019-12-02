
from django.urls import path, include
from .views import UserViewSet, DMTableViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'dm_tables', DMTableViewSet, basename='dm_table')
urlpatterns = router.urls