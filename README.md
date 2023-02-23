# Overview

This is a simple Rest API made with [Express](https://github.com/expressjs/express) to create, read, update and delete (CRUD) tasks where each user has its own tasks list.
The objective of this project is to make resources available to a web application, this service has all the basic operations of a CRUD , in addition, this rest api has authentication through Bearer token.
Specifically this project was development to be consumed by [vue-tasks](https://github.com/GFrancV/vue-tasks), a simple SPA that is prepared to use 100% of this service.
This project is deployed on [Railway](https://railway.app/) and can be accessed through the following [link](https://vue-tasks-api.up.railway.app/).

# API Auth

To use any of the API routes it will be necessary to authenticate with your email and password or register in the application. For this reason we will go on to explain the routes to authenticate in the API.
**Base URL:** https://vue-tasks-api.up.railway.app/

> For this documentation, the link where the application is currently deployed will be used as the base link. If you want to use the project in another environment, the base URL will have to be adapted to your needs.

## Auth login

### <code>POST</code> <code><b>/login</b></code>

### Request Body

| name     | type   | content                              |          |
| -------- | ------ | ------------------------------------ | -------- |
| email    | string | The email of the registered user.    | Required |
| password | string | The password of the registered user. | Required |

```json
{
	"email": "example@email.com",
	"password": "password"
}
```

### Responses

| http code | state            | response                                                                |
| --------- | ---------------- | ----------------------------------------------------------------------- |
| 200       | Successfull      | Returns the auth user and the generated token.                          |
| 400       | Validation error | Message with the description of the error and the bad formatted fields. |
| 400       | Email not found  | User not found with this email.                                         |

```json
{
	"token": "<API_TOKEN>",
	"user": {
		"_id": "asdasda1n21n32jksa",
		"name": "example",
		"email": "example@email.com"
	}
}
```

## Auth register

### <code>POST</code> <code><b>/register</b></code>

### Request Body

| name            | type   | content                        |          |
| --------------- | ------ | ------------------------------ | -------- |
| name            | string | Name for the user.             | Required |
| email           | string | Email for the user.            | Required |
| password        | string | Set the password of the user.  | Required |
| confirmPassword | string | Confirm the previous password. | Required |

```json
{
	"name": "name",
	"email": "example@email.com",
	"password": "password",
	"confirmPassword": "password"
}
```

### Responses

| http code | state            | response                                                                |
| --------- | ---------------- | ----------------------------------------------------------------------- |
| 200       | Successfull      | Returns the registed user and the token.                                |
| 400       | Validation error | Message with the description of the error and the bad formatted fields. |

```json
{
	"token": "<API_TOKEN>",
	"user": {
		"_id": "asdasda1n21n32jksa",
		"name": "example",
		"email": "example@email.com"
	}
}
```

# API Endpoints

All of this routes are protected therefore to use this routes need pass a valid auth token in the header.

### Headers

| key           | type   | content                    |          |
| ------------- | ------ | -------------------------- | -------- |
| Authorization | String | Bearer <YOUR_API_KEY_HERE> | Required |

**Base URL:** https://vue-tasks-api.up.railway.app/

> For this documentation, the link where the application is currently deployed will be used as the base link. If you want to use the project in another environment, the base URL will have to be adapted to your needs.

## Tasks

### Retrive all the tasks

#### <code>GET</code> <code><b>/api/tasks/{task_id}</b></code>

#### Responses

| http code | state        | response                                                          |
| --------- | ------------ | ----------------------------------------------------------------- |
| 200       | Successfull  | Returns the entire task list of the currently authenticated user. |
| 401       | Unauthorized | Message with the description of the error.                        |

```json
[
	{
		"_id":"123514njk",
		"title":"This is a new task to vercel",
		"description":"",
		"completed":true,
		"user_id":"asda21321fsa",
		"createdAt":"2023-02-17T17:45:59.674Z",
		"updatedAt":"2023-02-17T17:46:28.410Z"
	},
	{
		"_id":"1a1a514naw ",
		"title":"Title of the task",
		"description":"Description of the task.",
		"completed":false,
		"user_id":"asda21321fsa",
		"createdAt":"2023-02-23T10:36:41.362Z",
		"updatedAt":"2023-02-23T10:36:41.362Z"
	},
	...
]
```

### Retrive a specific task

#### <code>GET</code> <code><b>/api/tasks/{task_id}</b></code>

#### Path Parameters

| params  | type   | content             |          |
| ------- | ------ | ------------------- | -------- |
| task_id | String | The id of the task. | Required |

#### Responses

| http code | state          | response                                                            |
| --------- | -------------- | ------------------------------------------------------------------- |
| 200       | Successfull    | Returns the specific task list of the currently authenticated user. |
| 401       | Unauthorized   | Message with the description of the error.                          |
| 404       | Task not found | Message with the of the error.                                      |

```json
{
	"_id": "123514njk",
	"title": "This is a new task to vercel",
	"description": "",
	"completed": true,
	"user_id": "asda21321fsa",
	"createdAt": "2023-02-17T17:45:59.674Z",
	"updatedAt": "2023-02-17T17:46:28.410Z"
}
```

### Create task

#### <code>POST</code> <code><b>/api/tasks</b></code>

#### Request Body

| name        | type    | content                                                |          |
| ----------- | ------- | ------------------------------------------------------ | -------- |
| title       | string  | The title of the the task.                             | Required |
| description | string  | The description of the task.                           | Required |
| completed   | boolean | The status of the task. By default the state is false. |          |

```json
{
	"title": "Task title",
	"description": "Task description",
	"completed": false //optional
}
```

#### Responses

| http code | state            | response                                                                |
| --------- | ---------------- | ----------------------------------------------------------------------- |
| 201       | Successfull      | Returns the created task.                                               |
| 400       | Validation error | Message with the description of the error and the bad formatted fields. |
| 401       | Unauthorized     | Message with the description of the error.                              |

```json
{
	"_id": "1a1a514naw ",
	"title": "Task title",
	"description": "Task description.",
	"completed": false,
	"user_id": "asda21321fsa",
	"createdAt": "2023-02-23T10:36:41.362Z",
	"updatedAt": "2023-02-23T10:36:41.362Z"
}
```

### Update task

#### <code>PUT</code> <code><b>/api/tasks/{task_id}</b></code>

#### Request Body

| name        | type    | content                                                |          |
| ----------- | ------- | ------------------------------------------------------ | -------- |
| title       | string  | The title of the the task.                             | Required |
| description | string  | The description of the task.                           | Required |
| completed   | boolean | The status of the task. By default the state is false. | Required |

```json
{
	"title": "Task title",
	"description": "Task description",
	"completed": false
}
```

#### Path Parameters

| params  | type   | content             |          |
| ------- | ------ | ------------------- | -------- |
| task_id | string | The id of the task. | Required |

#### Responses

| http code | state            | response                                                                |
| --------- | ---------------- | ----------------------------------------------------------------------- |
| 200       | Successfull      | Returns the updated task.                                               |
| 401       | Unauthorized     | Message with the description of the error.                              |
| 400       | Validation error | Message with the description of the error and the bad formatted fields. |
| 404       | Task not found   | Message with the of the error.                                          |

```json
{
	"title": "Task title",
	"description": "Task description",
	"completed": false
}
```

### Delete task

#### <code>DELETE</code> <code><b>/api/tasks/{task_id}</b></code>

#### Path Parameters

| params  | type   | content             |          |
| ------- | ------ | ------------------- | -------- |
| task_id | string | The id of the task. | Required |

#### Responses

| http code | state          | response                                   |
| --------- | -------------- | ------------------------------------------ |
| 200       | Successfull    | Returns the deleted task.                  |
| 401       | Unauthorized   | Message with the description of the error. |
| 404       | Task not found | Message with the of the error.             |

```json
{
	"title": "Task title",
	"description": "Task description",
	"completed": false
}
```

## User

### Get current auth user

#### <code>GET</code> <code><b>/api/user</b></code>

#### Responses

| http code | state        | response                                   |
| --------- | ------------ | ------------------------------------------ |
| 200       | Successfull  | Retuns the current auth user.              |
| 401       | Unauthorized | Message with the description of the error. |

```json
{
	"_id": "asdasda1n21n32jksa",
	"name": "example",
	"email": "example@email.com"
}
```

# Built With

## Framework

- [express](https://github.com/expressjs/express): Simple framework to create a backend app with node.

## Important libraries

- [cors](https://www.npmjs.com/package/cors): Cross-Origin Resource Sharing to set the allowed hosts.
- [joi](https://www.npmjs.com/package/joi): To establish schemes forms for validat the content.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): To encript the password of the user.
- [jsonwebtoken](jsonwebtoken): To generate and validated JWT.
- [mongoose](https://www.npmjs.com/package/mongoose): To easily communicate with the MongoDB database.

## Database

- MongoDB: To the database.

# Installation

If you want to edit the source code or run it locally, just follow these steps:

```git
git clone https://github.com/GFrancV/vue-tasks-api
```

```bash
cd vue-tasks-api
```

```npm
npm install
```

To run the project in dev mode run this command:

```npm
npm run dev
```

If you want run the project in production mode run this command:

```npm
npm run start
```

> It's important see the `.env` file and set the environment variables before run the project.
