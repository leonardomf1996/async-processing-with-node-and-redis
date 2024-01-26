# async-processing-with-node-and-redis

This simple project aims to help introduce Redis into my range of tools.
There is an endpoint that captures the data coming from the request and publishes it in memory.


# Tools

- Node.js
- Docker compose

## Installation

To install dependencies
```
yarn
```
To create the Redis server (The -d flag is optional and is used to run in development)
```
docker compose up -d
```
With two terminals open, run a script in each
```
node src/server.js
```
```
node src/worker.js
```

## Available endpoints

```
GET http://localhost:3000/ping
POST http://localhost:3000/cadastro
{
	"name": "John Doe",
	"mail": "johndoe@mail.com",
	"pass": "123456"
}
```