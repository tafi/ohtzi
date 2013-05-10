from django.conf.urls import patterns, url

import views

urlpatterns = patterns('',
    url(r'^/?$', views.home, name='home'),
    url(r'^pray/?$', views.pray, name='pray'),
    url(r'^understand/?$', views.understand, name='understand'),
)
