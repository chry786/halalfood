from django.urls import path
#Takes all the views from views.py so urls can be created
from . import views

#Create Urls 
urlpatterns = [
    #path is left empty for the main homepage
	path('', views.store, name="store"),
	path('checkout/', views.checkout, name="checkout"),
    path('basket/', views.basket, name="basket"),
    path('update_item/', views.updateItem, name="update_item"),

]