from django import forms

from .models import Grupo, Marca, Item


class GrupoForm(forms.ModelForm):
    class Meta:
        model = Grupo
        fields = ['codigo',
                  'nombre',
                  'estado']
        labels = {'codigo': 'Código',
                  'nombre': 'Nombre',
                  'estado': 'Estado',
                  }


class MarcaForm(forms.ModelForm):
    class Meta:
        model = Marca
        fields = ['codigo',
                  'nombre',
                  'estado']
        labels = {'codigo': 'Código',
                  'nombre': 'Nombre',
                  'estado': 'Estado',
                  }


class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ['codigo',
                  'nombre',
                  'estado',
                  'grupo',
                  'marca']
        labels = {'codigo': 'Código',
                  'nombre': 'Nombre',
                  'estado': 'Estado',
                  'grupo': 'Grupo',
                  'marca': 'Marca',
                  }
