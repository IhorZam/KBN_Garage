from django.shortcuts import render, HttpResponsePermanentRedirect, HttpResponseRedirect, render_to_response


def main(request):
    return render_to_response('index.html')
