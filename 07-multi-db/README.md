docker run \
    --name postgres \
    -e POSTGRES_USER=wiliansilva \
    -e POSTGRES_PASSWORD=123456 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \ 
    postgres

## -- rodando o postgres
docker run -it -d postgres /bin/bash

## listar os processos
docker ps   

## start no docker
docker start postgres

## para entrar no container
docker exec -it postgres /bin/bash

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## ---- MONGODB
docker run 
    --name mongodb
    -p 27017:27017
    -e MONGO_INITDB_ROOT_USERNAME=admin
    -e MONGO_INITDB_ROOT_PASSWORD=admin
    -d 
    mongo:3.6

docker run \
    --name mongoclient \
    -p 3000:3000 \
    -link mongodb:mongodb \
    -d \
    mongoclient:mongoclient \

 ## -- verificando as info do docker host
 docker info

## -- listando as imagens
docker images

## -- docker search
docker search (parametro)