from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404

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
                grupo = form.save()
                grupo.save()
                return redirect('inventario:inv_inicio')
        else:
            form = GrupoForm
        return render(request, 'inventario/inv_grupos.html', {'form': form})
    else:
        grupo = get_object_or_404(Grupo, pk=pk)
        if request.method == 'POST':
            form = GrupoForm(data=request.POST, instance=grupo)
            if form.is_valid():
                post = form.save(commit=False)
                post.save()
                return redirect('inventario:inv_inicio')
            else:
                print('No valid form')
        else:
            data = {'codigo': grupo.codigo, 'nombre': grupo.nombre, 'estado': grupo.estado}
            form = GrupoForm(initial=data)
        return render(request, 'inventario/inv_grupos.html', {'form': form})


@login_required
def get_marca(request, pk, mode):
    print(request.method)
    if mode == "INS":
        if request.method == "POST":
            form = MarcaForm(request.POST)
            if form.is_valid():
                marca = form.save()
                marca.save()
                return redirect('inventario:inv_inicio')
        else:
            form = MarcaForm
        return render(request, 'inventario/inv_marcas.html', {'form': form})
    else:
        marca = get_object_or_404(Marca, pk=pk)
        if request.method == 'POST':
            form = MarcaForm(data=request.POST, instance=marca)
            if form.is_valid():
                post = form.save(commit=False)
                post.save()
                return redirect('inventario:inv_inicio')
            else:
                print('No valid form')
        else:
            data = {'codigo': marca.codigo, 'nombre': marca.nombre, 'estado': marca.estado}
            form = MarcaForm(initial=data)
        return render(request, 'inventario/inv_marcas.html', {'form': form})


@login_required
def get_item(request, pk, mode):
    fecha = datetime.datetime.now().strftime("%d-%m-%Y")
    tiempo = datetime.datetime.now().strftime("%H:%M%p")
    precio = 0

    if mode == "INS":
        if request.method == "POST":
            form = ItemForm(request.POST)
            if form.is_valid():
                item = form.save()
                item.save()
                return redirect('inventario:inv_inicio')
        else:
            form = ItemForm
        return render(request, 'inventario/inv_items.html', {'form': form,
                                                             'mode': mode})
    else:
        item = get_object_or_404(Item, pk=pk)
        item_precios = ItemPrecios.objects.filter(item__codigo=item.codigo).order_by('-fecVigencia')
        if request.method == 'POST':
            form = ItemForm(data=request.POST, instance=item)
            if form.is_valid():
                post = form.save(commit=False)
                post.save()
                return redirect('inventario:inv_inicio')
            else:
                print('No valid form')
        else:
            data = {'codigo': item.codigo,
                    'nombre': item.nombre,
                    'estado': item.estado,
                    'grupo': item.grupo,
                    'marca': item.marca,}
            form = ItemForm(initial=data)
        return render(request, 'inventario/inv_items.html', {'form': form,
                                                             'item': item,
                                                             'item_precios': item_precios,
                                                             'fecha': fecha,
                                                             'tiempo': tiempo,
                                                             'precio': precio})


@login_required
def get_precio(request, pk, fecVigencia, precio):
    print(request)
    pass


def set_precio(request):
    # Se obtienen los valores del post
    item_pk = request.POST.get('item_pk', '')
    fecha_vigencia = request.POST.get('fecha_vigencia', datetime.datetime.today().strftime('%d-%m-%Y'))
    precio = request.POST.get('precio', 0.00)

    item = get_object_or_404(Item, pk=item_pk)
    date = datetime.datetime.strptime(fecha_vigencia, '%d-%m-%Y')
    time = datetime.datetime.time(datetime.datetime.today())
    fecha_nueva = datetime.datetime.combine(date, time)

    # Insert del precio del item.
    item_precio = ItemPrecios(item=item, fecVigencia=fecha_nueva, precio=precio)
    item_precio.save()

    data = {
        'mensaje': 'Conexion con el back end.'
    }

    return JsonResponse(data)
