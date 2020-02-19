from django.db import models


class Vendor(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    phone_number = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    vendor = models.ForeignKey(Vendor, on_delete=models.DO_NOTHING)
    product_sku = models.CharField(max_length=60)
    description = models.TextField(blank=True)
    quantity = models.IntegerField()
    num_shipped = models.IntegerField(default=0)
    num_stocks = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
