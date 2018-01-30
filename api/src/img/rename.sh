#!/usr/bin/env bash

i=0
for old_name in *.jp*
do
    i=$((i+1))
    new_name="$(printf "%05d\n" $i).jpeg"
    mv "$old_name" "$new_name"
done
