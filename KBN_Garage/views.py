from django.shortcuts import render_to_response
from django.http import JsonResponse, HttpResponseRedirect
import json
from django.views.decorators.csrf import csrf_exempt
from KBN_Garage.models import *


def main(req):
    return render_to_response('index.html')


def request(req):
    if req.user is None:
        return HttpResponseRedirect('/form')
    return render_to_response('request.html')


def form(req):
    return render_to_response('form.html')


def bio(req):
    return render_to_response('bio.html')


def room(req):
    if req.user is None:
        return HttpResponseRedirect('/form')
    return render_to_response('room.html')


# API
@csrf_exempt
def sign_up(req):
    if req.method == 'POST':
        data = json.loads(req.body.decode('utf-8'))
        print(data)
        username = data['username']
        password = data['password']
        email = data['email']
        phone = data['telephone']
        if not User.objects.filter(username=username).exists():
            add_user(username, password, email, phone)
            key = Session.objects.authentificate(username, password)
            response = JsonResponse({'status': 'ok'})
            response.set_cookie('sessid', key)
            print('registered')
            return response
        return JsonResponse({'status': 'error'})


@csrf_exempt
def sign_in(req):
    if req.method == 'POST':
        data = json.loads(req.body.decode('utf-8'))
        username = data['username']
        password = data['password']
        sessid = Session.objects.authentificate(username, password)
        if sessid:
            response = JsonResponse({'status': 'ok'})
            response.set_cookie('sessid', sessid)
            return response
    return JsonResponse({'status': 'error'})


@csrf_exempt
def sign_out(req):
    Session.objects.exit(req.session)
    return JsonResponse({'status': 'ok'})


@csrf_exempt
def authorised(req):
    print(req.user is not None)
    return JsonResponse({'auth': req.user is not None})