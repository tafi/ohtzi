from django.conf.urls import patterns, include, url
from django.contrib import admin

from views import redirect_to

admin.autodiscover()

urlpatterns = patterns('',
#    url(r'^favicon\.ico$', redirect_to, {'url': '/static/eshrine/graphics/favicon.ico'}),
    url(r'^/?$', redirect_to, {'url': '/eshrine/'}),
    url(r'^admin/?', include(admin.site.urls)),
    url(r'^eshrine/', include('eshrine.urls')),
)
