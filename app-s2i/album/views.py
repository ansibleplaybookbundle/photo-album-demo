import os
from django.shortcuts import render
from django.http import JsonResponse
import requests
from xml.etree import cElementTree as ET


def index(request):
    api_url = os.environ.get('API_URL')

    if api_url:
        return render(request, 'album/index.html')
    else:
        return render(request, 'album/no-api.html', {
            'api_url': api_url
        })


def get_images(request):
    api_url = os.environ.get('API_URL')
    image_list = []
    if api_url:
        try:
            api_response = requests.get(api_url + "/images/get?format=xml&results_per_page=15")
            api_response.raise_for_status()
            image_data = ET.fromstring(api_response.text)
            for image in image_data.find("data").find("images"):
                image_list.append({
                    'id': image.find("id").text,
                    'url': image.find('url').text
                })
        except requests.exceptions.RequestException as e:
            print(e)
    return JsonResponse({'images': image_list})


def get_server_info(request):

    return JsonResponse({
        'serverInfo': {
            'albumTitle': os.environ.get('ALBUM_TITLE') or "The Random Album",
            'apiUrl': os.environ.get('API_URL')
        }
    })



def health(request):
    return True
