#!/usr/bin/env bash

FILE=load_images.sql

cat > $FILE <<- EOM
CREATE TABLE images (
id serial not null,
filename varchar not null,
PRIMARY KEY (id)
);


EOM

for image in *.jp*
do
    echo "INSERT INTO images(filename) VALUES('$image');" >> $FILE
done
