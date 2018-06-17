from django.contrib.auth.decorators import login_required
from django.core import serializers
from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView

from .models import Grupo, Marca, Item, ItemPrecios
from .forms import GrupoForm, MarcaForm, ItemForm

import datetime

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


@login_required
def inicio(request):
    grupos = Grupo.objects.all()
    marcas = Marca.objects.all()
    items = Item.objects.all()

    return render(request, 'inventario/inv_inicio.html', {'grupos_all': grupos,
                                                          'marcas_all': marcas,
                                                          'items_all': items,
                                                          })


@login_required
def get_grupo(request, pk, mode):
    if mode == "INS":
        if request.method == "POST":
            form = GrupoForm(request.POST)
            if form.is_valid():
                # Se guarda el formulario en la variable
                grupo = form.save()

                # Auditoria
                grupo.dtm_fecha_creacion = datetime.datetime.now()
                grupo.str_usuario_creacion = request.user.username
                grupo.dtm_fecha_modificacion = datetime.datetime.now()
                grupo.str_usuario_modificacion = request.user.username

                # Commit del grupo
                grupo.save()

                # Retorna a la url
                return redirect('inventario:inv_inicio')
        else:
            # Al ser un GET, retorna el formulario por defecto (vacio).
            form = GrupoForm
        return render(request, 'inventario/inv_grupos.html', {'form': form,
                                                              'mode': mode})
    else:
        # Busca el grupo por su clave primaria
        grupo = get_object_or_404(Grupo, pk=pk)

        # Auditoria
        grupo.str_usuario_modificacion = request.user.username
        grupo.dtm_fecha_modificacion = datetime.datetime.now()

        # Actua dependiendo del metodo
        if request.method == 'POST':
            form = GrupoForm(data=request.POST, instance=grupo)
            if form.is_valid():
                post = form.save(commit=False)
                post.save()
                return redirect('inventario:inv_inicio')
            else:
                print('No valid form!!')
        else:
            # Prepara la data para el formulario
            data = {'str_nombre': grupo.str_nombre,
                    'str_estado': grupo.str_estado}

            # Carga el formulario en una variable
            form = GrupoForm(initial=data)

        return render(request, 'inventario/inv_grupos.html', {'form': form,
                                                              'mode': mode})


@login_required
def get_marca(request, pk, mode):
    if mode == "INS":
        if request.method == "POST":
            form = MarcaForm(request.POST)
            if form.is_valid():
                # Guarda el formulario
                marca = form.save()

                # Auditoria
                marca.str_usuario_creacion = request.user.username
                marca.dtm_fecha_creacion = datetime.datetime.today()
                marca.str_usuario_modificacion = request.user.username
                marca.dtm_fecha_modificacion = datetime.datetime.today()

                # Almacena en base el objeto
                marca.save()
                return redirect('inventario:inv_inicio')
        else:
            # Al ser un GET, retorna el formulario por defecto (vacio).
            form = MarcaForm
        return render(request, 'inventario/inv_marcas.html', {'form': form,
                                                              'mode': mode})
    else:
        # Busca la marca por la clave primaria
        marca = get_object_or_404(Marca, pk=pk)

        # Auditoria
        marca.str_usuario_modificacion = request.user.username
        marca.dtm_fecha_modificacion = datetime.datetime.now()

        # Actua dependiendo del metodo
        if request.method == 'POST':
            form = MarcaForm(data=request.POST, instance=marca)
            if form.is_valid():
                post = form.save(commit=False)
                post.save()
                return redirect('inventario:inv_inicio')
            else:
                print('No valid form!!')
        else:
            data = {'str_nombre': marca.str_nombre,
                    'str_estado': marca.str_estado}
            form = MarcaForm(initial=data)
        return render(request, 'inventario/inv_marcas.html', {'form': form,
                                                              'mode': mode})


@login_required
def get_item(request, pk, mode):
    fecha = datetime.datetime.now().strftime("%d-%m-%Y")
    tiempo = datetime.datetime.now().strftime("%I:%M%p")
    precio = 0

    if mode == "INS":
        if request.method == "POST":
            form = ItemForm(request.POST)
            if form.is_valid():
                # Guarda el formulario y carga la variable
                item = form.save()

                # Auditoria
                item.str_usuario_creacion = request.user.username
                item.dtm_fecha_creacion = datetime.datetime.today()
                item.str_usuario_modificacion = request.user.username
                item.dtm_fecha_modificacion = datetime.datetime.today()

                # Alcena el item en base
                item.save()
                return redirect('inventario:get_item', pk=item.int_id, mode='UPD')
        else:
            # Al ser GET, carga el formulario vacio.
            form = ItemForm

        return render(request, 'inventario/inv_items.html', {'form': form,
                                                             'mode': mode})
    else:
        # Obtiene el item con la clave primaria
        item = get_object_or_404(Item, pk=pk)

        # Lista de precios del item
        item_precios = ItemPrecios.objects.filter(mod_item__int_id=item.int_id).order_by('-dtm_fecha_vigencia')

        # Auditoria
        item.str_usuario_modificacion = request.user.username
        item.dtm_fecha_modificacion = datetime.datetime.now()

        # Actua dependiendo del metodo
        if request.method == 'POST':
            form = ItemForm(data=request.POST, instance=item)
            if form.is_valid():
                post = form.save(commit=False)
                post.save()
                return redirect('inventario:admin_items')
            else:
                print('No valid form!!')
        else:
            # Carga la data
            data = {'str_codigo': item.str_codigo,
                    'str_nombre': item.str_nombre,
                    'str_estado': item.str_estado,
                    'mod_grupo': item.mod_grupo,
                    'mod_marca': item.mod_marca}

            # Carga el formulario con la data y en la variable
            form = ItemForm(initial=data)
        return render(request, 'inventario/inv_items.html', {'form': form,
                                                             'item': item,
                                                             'item_precios': item_precios,
                                                             'fecha': fecha,
                                                             'tiempo': tiempo,
                                                             'precio': precio})


@login_required
def set_precio(request):
    # Se obtienen los valores del post. ('lo que se obtiene', 'en caso de estar vacia la variable'.
    int_item_pk = request.POST.get('item_pk', '')
    str_fecha_vigencia = request.POST.get('fecha_vigencia', datetime.datetime.today().strftime('%d-%m-%Y'))
    str_tiempo_vigencia = request.POST.get('tiempo_vigencia',
                                           datetime.datetime.time(datetime.datetime.today()).strftime('%I:%M%p'))
    dec_precio = request.POST.get('precio', 0.00)
    str_fecha_tiempo_vigencia = str_fecha_vigencia + ' ' + str_tiempo_vigencia

    # Busca al item
    item = get_object_or_404(Item, pk=int_item_pk)

    # Carga las variables
    fecha_nueva = datetime.datetime.strptime(str_fecha_tiempo_vigencia, '%d-%m-%Y %I:%M%p')

    # Insert del precio del item.
    item_precio = ItemPrecios(mod_item=item, dtm_fecha_vigencia=fecha_nueva, dec_precio=dec_precio,
                              dtm_fecha_creacion=datetime.datetime.today(), str_usuario_creacion=request.user.username)
    item_precio.save()

    # Mensaje desde el back end

    data = {
        'mensaje': 'Se ha agregado el nuevo precio!!'
    }

    # Respuesta en Json del backend.
    return JsonResponse(data)


def filter_items(request):
    itm_codigo = request.POST.get('itm_codigo', '')
    itm_estado = request.POST.get('itm_estado', '')
    itm_nombre = request.POST.get('itm_nombre', '')
    itm_grupo = request.POST.get('itm_grupo', 0)
    itm_marca = request.POST.get('itm_marca', 0)

    # Filtro los items bajo las siguientes condiciones
    filtered_items = Item.objects.filter(str_codigo__contains=itm_codigo,
                                         str_estado__contains=itm_estado,
                                         str_nombre__contains=itm_nombre,
                                         )

    # En caso de haber filtrado un grupo, lo incluye en los filtros
    if itm_grupo != 0:
        filtered_items.filter(mod_grupo__int_id=itm_grupo).exclude(mod_grupo__isnull=True)

    # En caso de haber filtrado una marca, la incluye en los filtros
    if itm_marca != 0:
        filtered_items.filter(mod_marca__int_id=itm_marca).exclude(mod_marca__isnull=True)

    print(filtered_items)

    list_items = []
    for item in filtered_items:
        str_grupo = ''
        str_marca = ''
        if item.mod_grupo:
            str_grupo = item.mod_grupo.str_nombre

        if item.mod_marca:
            str_marca = item.mod_marca.str_nombre

        dic_item = {'int_id': item.int_id, 'str_codigo': item.str_codigo,
                    'str_nombre': item.str_nombre, 'str_grupo': str_grupo,
                    'str_marca': str_marca}

        list_items.append(dic_item)

    # Devuelve la data.
    data = {
        # 'filtered_items': serializers.serialize('json', list_items),
        'filtered_items': list_items,
        'count_filtered_items': filtered_items.count(),
    }

    return JsonResponse(data)


def delete_item(request):
    itm_id = request.POST.get('itm_id', '')

    itm = get_object_or_404(Item, pk=itm_id)
    itm.str_estado = 'I'
    itm.save()

    data = {
        'mensaje': 'El item a sido dado de baja.'
    }

    return JsonResponse(data)


# Clase para listar los items
class ItemListView(ListView):
    model = Item
    template_name = 'inventario/inv_adm_items.html'
    paginate_by = 15

    def get_queryset(self):
        return Item.objects.filter(str_estado__contains='A')

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)

        context['contador'] = Item.objects.filter(str_estado__contains='A').count()
        context['grupos'] = Grupo.objects.all()
        context['marcas'] = Marca.objects.all()
        context['est_maestros'] = ESTADOS_MAESTROS

        return context
