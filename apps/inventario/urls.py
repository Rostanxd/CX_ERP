from django.urls import path, re_path
from . import views

app_name = 'inventario'

urlpatterns = [
    path('', views.inicio, name='inv_inicio'),
    re_path(r'^grupo/(?P<pk>[0-9a-zA-Z]+)/(?P<mode>[0-9a-zA-Z]+)/$', views.get_grupo, name='get_grupo'),
    re_path(r'^marca/(?P<pk>[0-9a-zA-Z]+)/(?P<mode>[0-9a-zA-Z]+)/$', views.get_marca, name='get_marca'),
    re_path(r'^item/(?P<pk>[0-9a-zA-Z ]+)/(?P<mode>[0-9a-zA-Z]+)/$', views.get_item, name='get_item'),
    re_path(r'^item_precio/(?P<pk>[0-9a-zA-Z ]+)/$', views.get_item, name='get_precio'),
    re_path(r'^item_set_precio/(?P<pk>[0-9a-zA-Z ]+)/(?P<fecVigencia>\d{2}-\d{2}-\d{4})/(?P<precio>\d+\,\d{2})/$',
            views.set_precio, name='set_precio'),
]