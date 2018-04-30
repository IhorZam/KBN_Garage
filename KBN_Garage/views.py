from django.shortcuts import render, HttpResponsePermanentRedirect, HttpResponseRedirect, render_to_response


def main(request):
    return render_to_response('index.html')


def request(req):
    return render_to_response('request.html')


def form(req):
    return render_to_response('form.html')
