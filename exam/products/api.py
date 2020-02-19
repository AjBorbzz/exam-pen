from products.models import Product, Vendor
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, VendorSerializer


# Product viewset
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer


# Vendor viewset
class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VendorSerializer
