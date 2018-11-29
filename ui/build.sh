#!/usr/bin/env bash

set -x

ng build --prod
rm  -f ../app/src/static/album/*
cp -r dist/* ../app/src/static/album/
rm -f ../app-s2i/album/static/album/app/*
cp -r dist/* ../app-s2i/album/static/album/app/

