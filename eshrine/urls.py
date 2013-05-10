from django.conf.urls import patterns, url

import views

urlpatterns = patterns('',
    url(r'^/?$', views.home, name='home'),
    url(r'^submit-prayer/?$', views.submit_prayer, name='submit-prayer'),
    url(r'^understand/?$', views.understand, name='understand'),
)
