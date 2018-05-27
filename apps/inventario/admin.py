from django.contrib import admin
from .models import Marca, Grupo, Item

# Register your models here.
admin.site.register(Marca)
admin.site.register(Grupo)
admin.site.register(Item)