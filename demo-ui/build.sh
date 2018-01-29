#!/usr/bin/env bash

set -x

ng build --prod
rm ././../demo-app/src/static/album/*
cp -r dist/* ././../demo-app/src/static/album/
rm ././../demo-app-s2i/album/static/album/app/*
cp -r dist/* ././../demo-app-s2i/album/static/album/app/
