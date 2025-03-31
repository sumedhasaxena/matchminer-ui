#!/usr/bin/env sh
set -euo pipefail

echo "
upstream api {
    server ${API_URL:-mm-api:5000} max_fails=0;
    keepalive 64;
}
" > /tmp/upstream.conf;
