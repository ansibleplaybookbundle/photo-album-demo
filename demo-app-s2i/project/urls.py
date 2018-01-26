from django.conf.urls import include, url
from django.contrib import admin

from album.views import index, health, get_server_info, get_images

urlpatterns = [
    # Examples:
    # url(r'^$', 'project.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', index),
    url(r'^health$', health),
    url(r'^api/server-info$', get_server_info),
    url(r'^api/images$', get_images),
    url(r'^admin/', include(admin.site.urls)),
]
