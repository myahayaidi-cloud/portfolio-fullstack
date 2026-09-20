#!/usr/bin/env bash

echo "=== [1/6] Running composer ==="
composer install --no-dev --working-dir=/var/www/html

echo "=== [2/6] Clearing ALL caches ==="
php artisan config:clear
php artisan route:clear
php artisan cache:clear
php artisan view:clear
php artisan event:clear

echo "=== [3/6] Rebuilding caches ==="
php artisan config:cache
php artisan route:cache

echo "=== [4/6] Listing routes for debug ==="
php artisan route:list

echo "=== [5/6] Running migrations ==="
php artisan migrate --force

echo "=== [6/6] Storage link ==="
php artisan storage:link || true

echo "=== Deployment complete! ==="