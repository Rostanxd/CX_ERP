from django.db import models

"""ESTADOS MAESTOS"""
ACTIVO = 'A'
INACTIVO = 'I'

"""ESTADOS TRANSACCIONALES"""
PENDIENTE = 'E'
PROCESADO = 'P'
ANULADO = 'N'

ESTADOS_MAESTROS = [
    (ACTIVO, 'Activo'),
    (INACTIVO, 'Inactivo'),
]

ESTADOS_TRANSACCIONALES = [
    (ACTIVO, 'Activo'),
    (PROCESADO, 'Procesado'),
    (ANULADO, 'Anulado'),
]


# CLASES DE INVENTARIO
class Grupo(models.Model):
    int_id = models.AutoField(primary_key=True, editable=False, db_column="gruId")
    str_nombre = models.CharField(max_length=25, db_column='gruNombre')
    str_estado = models.CharField(max_length=1, choices=ESTADOS_MAESTROS, db_column='gruEstado')
    str_usuario_creacion = models.CharField(max_length=10, db_column="gruUsrCreacion", default="")
    dtm_fecha_creacion = models.DateTimeField(auto_now=False, null=True, db_column="gruFecCreacion")
    str_usuario_modificacion = models.CharField(max_length=10, db_column="gruUsrModificacion", default="")
    dtm_fecha_modificacion = models.DateTimeField(auto_now=False, null=True, db_column="gruFecModificacion")

    class Meta:
        db_table = 'inv_grupos'

    def estado_nombre(self):
        if self.str_estado == "A":
            return "Activo"
        else:
            return "Inactivo"

    def __str__(self):
        return self.str_nombre


class Marca(models.Model):
    int_id = models.AutoField(primary_key=True, editable=False, db_column="mrcId")
    str_nombre = models.CharField(max_length=25, db_column="mrcNombre")
    str_estado = models.CharField(max_length=1, choices=ESTADOS_MAESTROS, db_column="mrcEstado")
    str_usuario_creacion = models.CharField(max_length=10, db_column="mrcUsrCreacion", default="")
    dtm_fecha_creacion = models.DateTimeField(auto_now=False, null=True, db_column="mrcFecCreacion")
    str_usuario_modificacion = models.CharField(max_length=10, db_column="mrcUsrModificacion", default="")
    dtm_fecha_modificacion = models.DateTimeField(auto_now=False, null=True, db_column="mrcFecModificacion")

    class Meta:
        db_table = 'inv_marcas'

    def estado_nombre(self):
        if self.str_estado == "A":
            return "Activo"
        else:
            return "Inactivo"

    def __str__(self):
        return self.str_nombre


class Item(models.Model):
    int_id = models.AutoField(primary_key=True, editable=False, db_column="itmId")
    str_codigo = models.CharField(max_length=25, db_column="itmCodigo")
    str_nombre = models.CharField(max_length=25, db_column="itmNombre")
    str_estado = models.CharField(max_length=1, choices=ESTADOS_MAESTROS, db_column="itmEstado")
    str_usuario_creacion = models.CharField(max_length=10, db_column="itmUsrCreacion")
    dtm_fecha_creacion = models.DateTimeField(auto_now=False, null=True, db_column="itmFecCreacion")
    str_usuario_modificacion = models.CharField(max_length=10, db_column="itmUsrModificacion")
    dtm_fecha_modificacion = models.DateTimeField(auto_now=False, null=True, db_column="itmFecModificacion")
    mod_marca = models.ForeignKey(Marca,
                                  models.SET_NULL,
                                  blank=True,
                                  null=True,
                                  db_column='mrcId')
    mod_grupo = models.ForeignKey(Grupo,
                                  models.SET_NULL,
                                  blank=True,
                                  null=True,
                                  db_column='gruId')

    class Meta:
        db_table = 'inv_items'

    def estado_nombre(self):
        if self.str_estado == 'A':
            return 'Activo'
        else:
            return 'Inactivo'

    def __str__(self):
        return self.str_codigo.strip() + ' ' + self.str_nombre.strip()


class ItemPrecios(models.Model):
    mod_item = models.ForeignKey(Item,
                                 db_column="itmId",
                                 on_delete=models.CASCADE,
                                 )
    dtm_fecha_vigencia = models.DateTimeField(db_column="itmPreFecVigencia")
    dec_precio = models.DecimalField(max_digits=9, decimal_places=2, db_column="itmPreValor")
    str_usuario_creacion = models.CharField(max_length=10, db_column="itmPreUsrCreacion", default="")
    dtm_fecha_creacion = models.DateTimeField(auto_now=False, null=True, db_column="itmPreFecCreacion")

    class Meta:
        db_table = 'inv_items_precios'
        unique_together = (('mod_item', 'dtm_fecha_vigencia'),)

    def __str__(self):
        return self.mod_item.str_nombre.strip() + ' ' + self.dtm_fecha_vigencia.__str__() + ' ' + \
               self.dec_precio.__str__()
