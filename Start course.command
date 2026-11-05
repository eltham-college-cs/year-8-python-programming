#!/bin/sh
cd "$(dirname "$0")" || exit 1

if [ ! -f dist/index.html ]; then
  printf '%s\n' 'The course build is missing. See README.md for how to rebuild it.'
  exit 1
fi

printf '%s\n' 'Open http://127.0.0.1:8765/ in your browser.' 'Keep this window open while using the course.'
exec python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
