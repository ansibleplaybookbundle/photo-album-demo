#!/usr/bin/env bash

set -x

ng build --prod
rm ././../src/static/album/*
cp -r dist/* ././../src/static/album/ -v
