# Generated by Django 3.0.14 on 2021-09-06 21:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_order_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='role',
        ),
    ]