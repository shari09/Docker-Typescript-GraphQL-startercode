# Docker-Typescript-GraphQL-startercode

Starter code for Docker, Typescript, GraphQL stack (Postgres as DB in this example)

I found that I always use this stack for my own projects so I thought to open source this
for everyone else to use.

The `User` schema, resolvers, datasource, and DB model are examples of the structure of the data,
which should be modified to be your own schemas.

## Usage

`docker-compose up --build` will build the docker images and start the containers.  
`docker-compose up` will start the docker containers.  
`docker-compose down` will stop the containers.

Warning: Nodemon doesn't watch GraphQL schema changes (the Typescript file needs to be generated via `yarn run codegen`).

## Contribute

Some of these files may not inhabit the best practices in terms of typing, so feel free to come up with better solutions!  
I will also add `mocha/chai` test suite into this starter code once I have some time,
but if someone is willing to add an issue and open a PR for that, they will be very appreciated :)
