#!/bin/sh

# Run Tailwind CSS and compile CSS and watch for change to re-compile CSS.

npx tailwindcss -c ./tailwind.config.js \
  -i ./main.css -o ../../assets/css/main.css \
  --minify \
  --watch
