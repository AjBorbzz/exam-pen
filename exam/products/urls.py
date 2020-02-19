from rest_framework import routers
from .api import ProductViewSet, VendorViewSet


router = routers.DefaultRouter()
router.register('api/products', ProductViewSet, 'products')
router.register('api/vendors', VendorViewSet, 'products')
urlpatterns = router.urls
