from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer


# Product viewset
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer
