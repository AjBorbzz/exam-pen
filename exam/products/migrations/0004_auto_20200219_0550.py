# Generated by Django 3.0.3 on 2020-02-19 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20200219_0418'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='is_shipped',
        ),
        migrations.AddField(
            model_name='product',
            name='num_shipped',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='num_stock',
            field=models.IntegerField(default=0),
        ),
    ]
