# Generated by Django 2.0.5 on 2018-06-08 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0003_auto_20180608_0907'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='fechaCreacion',
            field=models.DateTimeField(auto_now_add=True, db_column='itmFecCreacion'),
        ),
        migrations.AlterField(
            model_name='item',
            name='fechaModificacion',
            field=models.DateTimeField(auto_now_add=True, db_column='itmFecModificacion'),
        ),
    ]
