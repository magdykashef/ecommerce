# Ecommerce

<p>

Ecommerce app built with Angular, Nodejs, Express and PostgreSQL.
<br>
<!-- [Click here to see Front-End demo](http://udacity-udagram-bucket.s3-website-us-east-1.amazonaws.com/home) -->

</p>



## Table of content

- [Getting Started](#Getting-Started)
- [Requirements](#Requirements)
- [Dependencies](./docs/dependencies.md)
- [Installation](#Installation)
- [Setup Environment](#Setup-Environment)
- [Available scripts](#available-scripts)
- [Built With](#Built-With)


## Requirements

```
- Node v16.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 8.11.0 (LTS) or more recent, Yarn can work but was not tested for this project
```

## Getting Started

1. Clone this repo locally into the location of your choice.
1. Open a terminal and navigate to the root of the repo
1. follow the instructions in the installation step

### Installation
- From the root of the repo, to install the node_modules run the following: 
- `npm run backend:install`
- `npm run frontend:install`


### Setup Environment
Bellow are the environmental variables that needs to be set in a `.env` file. This is the default setting that I used for development, but you can change it to what works for you.

Go to `api` directory, then create a `.env` file with all the required environment variables:


```bash
PORT=EXPRESS_PORT
DB_PORT=DATA_BASE_PORT
POSTGRES_HOST=POSTGRES_HOST
POSTGRES_USERNAME=POSTGRES_USERNAME
POSTGRES_PASSWORD=POSTGRES_PASSWORD
POSTGRES_DB=DATA_BASE_NAME
JWT_SECRET=JWT_SECRET
BCRYBT_PASSWORD=BCRYBT_PASSWORD
SALT_ROUNDS=10
```


## Available scripts:

### Up and Running

1. `npm run backend:dev`
2. `npm run frontend:start`


### Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `npm run frontend:test`

<br>

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework.
- [Node](https://nodejs.org) - Javascript Runtime.
- [Express](https://expressjs.com/) - Javascript API Framework.
