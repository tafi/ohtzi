from django.conf.urls import patterns, include, url
from django.contrib import admin

from views import redirect_to

admin.autodiscover()

urlpatterns = patterns('',
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^/?$', redirect_to, {'url': '/eshrine/'}),
    url(r'^admin/?', include(admin.site.urls)),
    url(r'^eshrine/?', include('eshrine.urls')),
)
