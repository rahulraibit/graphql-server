# hackernews-graphql-js

Refrence: https://github.com/howtographql/graphql-js

## Usage

### 1. Clone repository & install dependencies

```sh
git clone https://github.com/rahulraibit/graphql-server.git	
cd hackernews-node
yarn install # or `npm install`
```

### 2. Install the Prisma CLI

```sh
yarn global add prisma
```

You need to setup a Prisma service. You can refer to [this Quickstart](https://www.prisma.io/docs/quickstart/) to learn how.

### 3. Deploy Prisma and database

```sh
prisma deploy
```
you choose to deploy Prisma locally by creating a new database in the docker. Make sure docker is running)
```sh
docker-compose up -d
```
This will deploy the mysql, prisma services to the conatiner.
open http://localhost:41466 to make sure your prisma server is running.

### 4. Start the server & open Playground

To interact with the API in a GraphQL Playground, all you need to do is execute the `start` script defined in `package.json`:

```sh
yarn start
```

## important links

https://www.prisma.io/docs/reference/prisma-servers-and-dbs/prisma-servers/docker-aira9zama5
https://www.howtographql.com/graphql-js/0-introduction/

