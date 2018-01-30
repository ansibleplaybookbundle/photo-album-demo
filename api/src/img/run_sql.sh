#!/usr/bin/env bash

psql -U postgres -d demodogs -p 5432 -h localhost -f ./load_images.sql
