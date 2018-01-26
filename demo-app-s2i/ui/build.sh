#!/usr/bin/env bash

set -x

ng build --prod
rm ../album/static/album/app/*
cp -r dist/* ../album/static/album/app/ -v
