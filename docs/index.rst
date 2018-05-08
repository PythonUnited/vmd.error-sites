==================
Custom Error Pages
==================

Nginx
=====

Example of how to add this part to *$SITE*.conf in */etc/nginx/conf.d/*$SITE*.conf

.. code-block:: nginx

    ...
    ...
    # Servername and stuff
    access_log /var/log/nginx/*$SITE*.log;
    error_log /var/log/nginx/*$SITE*.error.log;

    root /srv/www/vmd.error-sites;

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        internal;
    }

    location ~ ^/(css|js)/(reset|main)\.(css|js) {
        root /srv/www/vmd.error-sites;
    }

    location  ~ ^/img/(logo|penguin)\.(svg) {
        root /srv/www/vmd.error-sites;
    }