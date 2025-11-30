from rest_framework.routers import DefaultRouter
from .views import RequestViewSet

router = DefaultRouter()
router.register(r"", RequestViewSet, basename="requests")

urlpatterns = router.urls
