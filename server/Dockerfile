FROM php:8.3-fpm

# Устанавливаем расширения PHP
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Устанавливаем Composer
COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer

# Обновляем пакеты и устанавливаем зависимости для PHP
RUN apt-get update && apt-get install -y libzip-dev unzip

# RUN apt-get install -y cron \
#     && echo "* * * * * /usr/local/bin/php /var/www/html/artisan schedule:run >> /var/www/html/storage/logs/cron.log 2>&1" > /etc/cron.d/run_laravel_scheduler \
#     && crontab -u www-data /etc/cron.d/run_laravel_scheduler

# Открываем порт для PHP-FPM
EXPOSE 9000

# Запускаем PHP-FPM
CMD ["php-fpm"]
