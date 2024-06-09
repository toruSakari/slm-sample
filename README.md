# slm-sample

## run docker
````sh
docker-compose up -d
````

## pull phi3 model in ollama_container
````sh
docker exec -it ollama_container
```` 

````sh
ollama pull phi3
````

## run script in server_container
````sh
docker exec -it server_container
```` 

````sh
yarn start
````
