from bottle import route, run, get, static_file, response, template, view
from urllib.parse import urljoin
import os
import xml.etree.cElementTree as ET

import db_info
from db_info.db_info_factory import get_db_info


# Web pages
@route('/')
@view('index')
def index():
    api_host = os.environ.get('API_HOST')
    return dict(api_host=api_host)


# For Static files
@get("/static/css/<filename:re:.*\.css>")
def css(filename):
    return static_file(filename, root="static/css")


@get("/static/fonts/<filename:re:.*\.(eot|otf|svg|ttf|woff|woff2?)>")
def font(filename):
    return static_file(filename, root="static/fonts")


@get("/static/img/<filename:re:.*\.(jpeg|jpg|png|gif|ico|svg)>")
def img(filename):
    return static_file(filename, root="static/img")


@get("/static/js/<filename:re:.*\.js>")
def js(filename):
    return static_file(filename, root="static/js")


# API
@get("/images/get")
def random_images():
    db_type = os.environ.get('DB_TYPE')
    db_host = os.environ.get('DB_HOST')
    db_port = os.environ.get('DB_PORT')
    db_name = os.environ.get('DB_NAME')
    db_user = os.environ.get('DB_USER')
    db_password = os.environ.get('DB_PASSWORD')
    api_host = os.environ.get('API_HOST')

    db_info = get_db_info(db_type, db_host, db_port, db_name, db_user, db_password)
    db_info.connect()
    sql_result = db_info.query_all("SELECT * FROM images ORDER BY RANDOM() LIMIT 15")
    xml_response = ET.Element("response")
    data = ET.SubElement(xml_response, "data")
    images = ET.SubElement(data, "images")

    for row in sql_result:
        image = ET.SubElement(images, "image")
        ET.SubElement(image, "id").text = str(row[0])
        ET.SubElement(image, "url").text = urljoin("http://" + api_host, "/img/" + row[1])
    db_info.disconnect()
    response.content_type = 'text/xml'
    return ET.tostring(xml_response)


# Files
@get("/img/<filename:re:.*\.*>")
def img(filename):
    return static_file(filename, root="img")


if __name__ == '__main__':
    run(host='0.0.0.0', port=8080, debug=True, reloader=True)
