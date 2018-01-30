#!/usr/bin/env bash
set -x

DB_TYPE=postgres DB_HOST=localhost DB_PORT="5432" DB_NAME=demodogs DB_USER=demouser DB_PASSWORD=demopass API_HOST="localhost:8080" python app.py
