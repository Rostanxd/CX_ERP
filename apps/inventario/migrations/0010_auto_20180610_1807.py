# Generated by Django 2.0.5 on 2018-06-10 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0009_auto_20180610_1803'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grupo',
            name='dtm_fecha_creacion',
            field=models.DateTimeField(db_column='gruFecCreacion', null=True),
        ),
        migrations.AlterField(
            model_name='grupo',
            name='dtm_fecha_modificacion',
            field=models.DateTimeField(db_column='gruFecModificacion', null=True),
        ),
    ]
