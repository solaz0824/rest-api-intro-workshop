# Node.js-Rest-API<!-- omit in toc -->

## Table of Contents<!-- omit in toc -->

- [Introduction](#introduction)
- [Objectives](#objectives)
- [Getting Started](#getting-started)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Dependencies](#2-dependencies)
  - [3. Create .env file](#3-create-env-file)
- [Project](#project)
  - [1. nodemon](#1-nodemon)
  - [2. Postman](#2-postman)
- [Resources](#resources)
- [Technologies used](#technologies-used)
- [Authors](#authors)

## Introduction

- REST API using Node.js, Express.js, MongoDB and Mongoose.
- Implement authentication using JSON Web Tokens.

## Objectives

- Gain experience on entity schema definition and relationships
- Learn how to connect to a MongoDB database using a node.js driver
- Learn how to execute Queries and CRUD operations using a node.js driver
- Learn how to implement a node.js REST API
- Gain experience using API development tools like Postman
- Improve your knowledge of backend development

<br>

## Getting Started

### 1. Clone the repository

First, you will need to clone the repo:

```bash
$ git clone https://github.com/solaz0824/Node.js-Rest-API.git
```

### 2. Dependencies

Then, you will need to install the dependencies with: `npm install`.

```
$ npm install
```

### 3. Create .env file

Include these lines below in .env file

```
MONGO_DB_URL_PRODUCTION=mongodb://localhost/rest-api-pill
MONGO_DB_URL_DEVELOPMENT=mongodb://localhost/rest-api-pill
MONGO_DB_URL_TEST=mongodb://localhost/rest-api-pill
ACCESS_TOKEN_SECRET=myaccesstokensecretthatshouldnotbeshare
PORT= YOUR PORT NUMBER HERE (example->  3000)
ENCRYPTION_SALT_DEVELOPMENT=10
ENCRYPTION_SALT_PRODUCTION=10

```

## Project

### 1. nodemon

In your terminal, enter this line below

```bash
$ nodemon
```

now, you have seed data already made.

### 2. Postman

- Register (POST)

  1. First option

  - Go to your Postman and <br> enter this URL
    `localhost:your port/account/register` to create your account to access to data.

  2.  Second option

  - You can use seed user data which is <br>
    `{"email":"admin@mail.com", "password": "123456"}`

- Login(POST)

  - with the data you registered or seed user data, you can login.
  - URL : `localhost:your port/account/authenticate`
  - body -> raw -> JSON
  - introduce this information `{"email":"admin@mail.com", "password": "123456"}`
  - then, you will get a `token` that allows you to access to your data.
  - Copy your `token`.

- Data (GET)

  - First, go to `headers` in your request on Postman and
  - add a key called `authorization` and value will be your `token`.
  - You can access to the database of movies, users and persons by using URLs below

  ```
  URL : localhost:your port/movies
  URL : localhost:your port/users
  URL : localhost:your port/persons
  ```

- Get Data by Id(GET)

  ```
  URL : localhost:your port/movies/:id
  URL : localhost:your port/users/:id
  URL : localhost:your port/persons/:id
  ```

- Data (PATCH & DELETE)
  ```
  URL : localhost:your port/movies/:id
  URL : localhost:your port/users/:id
  URL : localhost:your port/persons/:id
  ```

<br><br>

## Resources

- Password hash: https://github.com/kelektiv/node.bcrypt.js
- dotenv: https://github.com/motdotla/dotenv
- express: https://expressjs.com/
- express security best practices:
  https://expressjs.com/en/advanced/best-practice-security.html
- Official MongoDB documentation: https://www.mongodb.com/
- W3Schools MongoDB:
  https://www.w3schools.in/mongodb/query-operations/
- MongoDB queries: https://docs.mongodb.com/manual/tutorial/query-documents/
- MongoDB University: https://university.mongodb.com/
- MVC Pattern: https://en.wikipedia.org/wiki/Model–view–controller

## Technologies used

- `Node.js`
- `eslint`
- `prettier`
- `Mongodb`
- `Postman`
- `bcrypt`
- `body-parser`,
- `cross-env`,
- `dotenv`,
- `express`,
- `helmet`,
- `jsonwebtoken`,
- `loglevel`,

  <br><br>

## Authors

Eunyoung Kim [@solaz0824](https://github.com/solaz0824)
