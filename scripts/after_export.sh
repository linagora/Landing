#!/bin/sh

find ./out -name "*.html" -exec bash -c 'mkdir "${1%.html}"' - '{}' \;
find ./out -name "*.html" -exec bash -c 'cp "$1" "${1%.html}"/index.html' - '{}' \;
cp -r -n ./out/en/* ./out/;
