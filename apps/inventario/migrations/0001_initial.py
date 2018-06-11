# Generated by Django 2.0.5 on 2018-06-10 23:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Grupo',
            fields=[
                ('int_id', models.AutoField(db_column='gruId', editable=False, primary_key=True, serialize=False)),
                ('str_nombre', models.CharField(db_column='gruNombre', max_length=25)),
                ('str_estado', models.CharField(choices=[('A', 'Activo'), ('I', 'Inactivo')], db_column='gruEstado', max_length=1)),
                ('str_usuario_creacion', models.CharField(db_column='gruUsrCreacion', default='', max_length=10)),
                ('dtm_fecha_creacion', models.DateTimeField(db_column='gruFecCreacion', null=True)),
                ('str_usuario_modificacion', models.CharField(db_column='gruUsrModificacion', default='', max_length=10)),
                ('dtm_fecha_modificacion', models.DateTimeField(db_column='gruFecModificacion', null=True)),
            ],
            options={
                'db_table': 'inv_grupos',
            },
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('int_id', models.AutoField(db_column='itmId', editable=False, primary_key=True, serialize=False)),
                ('str_codigo', models.CharField(db_column='itmCodigo', max_length=25)),
                ('str_nombre', models.CharField(db_column='itmNombre', max_length=25)),
                ('str_estado', models.CharField(choices=[('A', 'Activo'), ('I', 'Inactivo')], db_column='itmEstado', max_length=1)),
                ('str_usuario_creacion', models.CharField(db_column='itmUsrCreacion', max_length=10)),
                ('dtm_fecha_creacion', models.DateTimeField(db_column='itmFecCreacion', null=True)),
                ('str_usuario_modificacion', models.CharField(db_column='itmUsrModificacion', max_length=10)),
                ('dtm_fecha_modificacion', models.DateTimeField(db_column='itmFecModificacion', null=True)),
                ('mod_grupo', models.ForeignKey(blank=True, db_column='gruId', null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventario.Grupo')),
            ],
            options={
                'db_table': 'inv_items',
            },
        ),
        migrations.CreateModel(
            name='ItemPrecios',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dtm_fecha_vigencia', models.DateTimeField(db_column='itmPreFecVigencia')),
                ('dec_precio', models.DecimalField(db_column='itmPreValor', decimal_places=2, max_digits=9)),
                ('str_usuario_creacion', models.CharField(db_column='itmPreUsrCreacion', default='', max_length=10)),
                ('dtm_fecha_creacion', models.DateTimeField(db_column='itmPreFecCreacion', null=True)),
                ('mod_item', models.ForeignKey(db_column='itmId', on_delete=django.db.models.deletion.CASCADE, to='inventario.Item')),
            ],
            options={
                'db_table': 'inv_items_precios',
            },
        ),
        migrations.CreateModel(
            name='Marca',
            fields=[
                ('int_id', models.AutoField(db_column='mrcId', editable=False, primary_key=True, serialize=False)),
                ('str_nombre', models.CharField(db_column='mrcNombre', max_length=25)),
                ('str_estado', models.CharField(choices=[('A', 'Activo'), ('I', 'Inactivo')], db_column='mrcEstado', max_length=1)),
                ('str_usuario_creacion', models.CharField(db_column='mrcUsrCreacion', default='', max_length=10)),
                ('dtm_fecha_creacion', models.DateTimeField(db_column='mrcFecCreacion', null=True)),
                ('str_usuario_modificacion', models.CharField(db_column='mrcUsrModificacion', default='', max_length=10)),
                ('dtm_fecha_modificacion', models.DateTimeField(db_column='mrcFecModificacion', null=True)),
            ],
            options={
                'db_table': 'inv_marcas',
            },
        ),
        migrations.AddField(
            model_name='item',
            name='mod_marca',
            field=models.ForeignKey(blank=True, db_column='mrcId', null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventario.Marca'),
        ),
        migrations.AlterUniqueTogether(
            name='itemprecios',
            unique_together={('mod_item', 'dtm_fecha_vigencia')},
        ),
    ]
