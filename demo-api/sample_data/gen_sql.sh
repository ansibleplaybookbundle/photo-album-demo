#!/usr/bin/env bash



NAMES=$(cat dog_names.txt)
shuffle_names
FILES=($(ls))
echo $NAMES

rm load_data.sql || true


for FILE in "${FILES[@]}"
do
   echo $FILE >> load_data.sql
done


