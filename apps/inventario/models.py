from django.db import models
from django.utils import timezone

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
    id = models.AutoField(primary_key=True, editable=False, db_column="gruId")
    nombre = models.CharField(max_length=25, db_column='gruNombre')
    estado = models.CharField(max_length=1, choices=ESTADOS_MAESTROS, db_column='gruEstado')
    usuarioCreacion = models.CharField(max_length=10, db_column="gruUsrCreacion", default="")
    fechaCreacion = models.DateTimeField(auto_now=True, db_column="gruFecCreacion")
    usuarioModificacion = models.CharField(max_length=10, db_column="gruUsrModificacion", default="")
    fechaModificacion = models.DateTimeField(auto_now=True, db_column="gruFecModificacion")

    class Meta:
        db_table = 'inv_grupos'

    def estado_nombre(self):
        if self.estado == "A":
            return "Activo"
        else:
            return "Inactivo"

    def __str__(self):
        return self.nombre


class Marca(models.Model):
    id = models.AutoField(primary_key=True, editable=False, db_column="mrcId")
    nombre = models.CharField(max_length=25, db_column="mrcNombre")
    estado = models.CharField(max_length=1, choices=ESTADOS_MAESTROS, db_column="mrcEstado")
    usuarioCreacion = models.CharField(max_length=10, db_column="mrcUsrCreacion", default="")
    fechaCreacion = models.DateTimeField(auto_now=True, db_column="mrcFecCreacion")
    usuarioModificacion = models.CharField(max_length=10, db_column="mrcUsrModificacion", default="")
    fechaModificacion = models.DateTimeField(auto_now=True, db_column="mrcFecModificacion")

    class Meta:
        db_table = 'inv_marcas'

    def estado_nombre(self):
        if self.estado == "A":
            return "Activo"
        else:
            return "Inactivo"

    def __str__(self):
        return self.nombre


class Item(models.Model):
    id = models.AutoField(primary_key=True, editable=False, db_column="itmId")
    codigo = models.CharField(max_length=25, db_column="itmCodigo")
    nombre = models.CharField(max_length=25, db_column="itmNombre")
    estado = models.CharField(max_length=1, choices=ESTADOS_MAESTROS, db_column="itmEstado")
    usuarioCreacion = models.CharField(max_length=10, db_column="itmUsrCreacion")
    fechaCreacion = models.DateTimeField(auto_now=True, db_column="itmFecCreacion")
    usuarioModificacion = models.CharField(max_length=10, db_column="itmUsrModificacion")
    fechaModificacion = models.DateTimeField(auto_now=True, db_column="itmFecModificacion")
    marca = models.ForeignKey(Marca,
                              models.SET_NULL,
                              blank=True,
                              null=True,
                              db_column='mrcId')
    grupo = models.ForeignKey(Grupo,
                              models.SET_NULL,
                              blank=True,
                              null=True,
                              db_column='gruId')

    class Meta:
        db_table = 'inv_items'

    def estado_nombre(self):
        if self.estado == 'A':
            return 'Activo'
        else:
            return 'Inactivo'

    def __str__(self):
        return self.codigo.strip() + ' ' + self.nombre.strip()


class ItemPrecios(models.Model):
    item = models.ForeignKey(Item,
                             db_column="itmId",
                             on_delete=models.CASCADE,
                             )
    fecVigencia = models.DateTimeField(db_column="itmPreFecVigencia")
    precio = models.DecimalField(max_digits=9, decimal_places=2, db_column="itmPreValor")
    usuarioCreacion = models.CharField(max_length=10, db_column="itmPreUsrModificacion", default="")
    fechaCreacion = models.DateTimeField(auto_now=True, db_column="itmPreFecModificacion")

    class Meta:
        db_table = 'inv_items_precios'
        unique_together = (('item', 'fecVigencia'),)

    def __str__(self):
        return self.item.nombre.strip() + ' ' + self.fecVigencia.__str__() + ' ' + self.precio.__str__()
