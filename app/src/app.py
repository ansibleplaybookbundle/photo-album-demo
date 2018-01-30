from bottle import route, run, get, static_file, template, view, debug
import os
import requests
from xml.etree import ElementTree as ET


@route('/')
@view('index')
def index():
    api_url = os.environ.get('API_URL')
    return dict(api_url=api_url)


# For Static files
@get("/static/css/<filename:re:.*\.css>")
def css(filename):
    return static_file(filename, root="static/css")


@get("/static/fonts/<filename:re:.*\.(eot|otf|svg|ttf|woff|woff2?)>")
def font(filename):
    return static_file(filename, root="static/fonts")


@get("/static/img/<filename:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filename):
    return static_file(filename, root="static/img")


@get("/static/js/<filename:re:.*\.js>")
def js(filename):
    return static_file(filename, root="static/js")


@get("/static/album/<filename:re:.*\.*>")
def album(filename):
    return static_file(filename, root="static/album")


@get("/api/server-info")
def server_info():
    return {
        'serverInfo': {
            'albumTitle': os.environ.get('ALBUM_TITLE') or "The Random Album",
            'apiUrl': os.environ.get('API_URL')
        }
    }


@get("/api/images")
def images():
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
    return {'images': image_list}


if __name__ == '__main__':
    run(host='0.0.0.0', port=8080, debug=True, reloader=True)
