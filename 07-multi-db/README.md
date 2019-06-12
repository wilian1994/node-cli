docken run \
    --name postgree \
    -e POSTGRES_USER=wiliansilva \
    -e POSTGRES_PASSWORD=123456 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \ 
    postgres

docker ps   
docker -exec -it postgres /bin/bash

docken run \
--name adminer \
-p 8080:8080 \
--link postgres:postgres \ 
-d 
adminer