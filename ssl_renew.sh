#!/bin/bash

/usr/local/bin/docker-compose -f /home/arnoldjos/apps/arnoldjos/docker-compose.yml run certbot renew --dry-run \
&& /usr/local/bin/docker-compose -f /home/arnoldjos/apps/arnoldjos/docker-compose.yml kill -s SIGHUP proxy