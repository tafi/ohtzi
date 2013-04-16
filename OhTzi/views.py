from django.http.response import HttpResponseRedirect

def redirect_to(request, url):
    return HttpResponseRedirect(url)