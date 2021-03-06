"""KBN_Garage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView

from KBN_Garage.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', main),
    url(r'^request/$', request),
    url(r'^room/$', room),
    url(r'^form/$', form),
    url(r'^bio/$', bio),
    url('^login/$', sign_in),
    url('^signup/$', sign_up),
    url('^logout/$', sign_out),
    url('^check_auth/$', authorised),
    url('^post_req/$', post_req),
    url('^my_reqs/$', my_reqs)
]