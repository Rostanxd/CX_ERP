from django import forms

from .models import Grupo, Marca, Item


class GrupoForm(forms.ModelForm):
    class Meta:
        model = Grupo
        fields = ["str_nombre",
                  "str_estado"]
        labels = {"str_nombre": 'Nombre',
                  "str_estado": 'Estado',
                  }


class MarcaForm(forms.ModelForm):
    class Meta:
        model = Marca
        fields = ["str_nombre",
                  "str_estado"]
        labels = {"str_nombre": 'Nombre',
                  "str_estado": 'Estado',
                  }


class ItemForm(forms.ModelForm):
    class Meta:
        model = Item
        fields = ["str_codigo",
                  "str_nombre",
                  "str_estado",
                  "mod_grupo",
                  "mod_marca"]
        labels = {"str_codigo": 'Código',
                  "str_nombre": 'Nombre',
                  "str_estado": 'Estado',
                  "mod_grupo": 'Grupo',
                  "mod_marca": 'Marca',
                  }
