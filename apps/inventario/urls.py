from django.urls import path, re_path
from . import views

app_name = 'inventario'

urlpatterns = [
    path('', views.inicio, name='inv_inicio'),
    re_path(r'^grupo/(?P<pk>[0-9a-zA-Z]+)/(?P<mode>[0-9a-zA-Z]+)/$', views.get_grupo, name='get_grupo'),
    re_path(r'^marca/(?P<pk>[0-9a-zA-Z]+)/(?P<mode>[0-9a-zA-Z]+)/$', views.get_marca, name='get_marca'),
    re_path(r'^item/(?P<pk>[0-9a-zA-Z ]+)/(?P<mode>[0-9a-zA-Z]+)/$', views.get_item, name='get_item'),
    re_path(r'^item_precio/(?P<pk>[0-9a-zA-Z ]+)/$', views.get_item, name='get_precio'),
    re_path(r'^item_set_precio/$', views.set_precio, name='itm_set_precio'),
    re_path(r'^admin_items/$', views.ItemListView.as_view(), name='admin_items'),
    re_path(r'^item_delete/$', views.delete_item, name='delete_item'),
    re_path(r'^filter_items/$', views.filter_items, name='filter_item'),
]
