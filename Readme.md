docker network create --attachable mi_red
docker-compose up -d

npx tsc --version
npx tsc --init
npx tsc --watch
npx tsc src/** --tarjet es6
