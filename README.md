# Todo REST API

A REST API for managing todos built with Node.js, Express, and PostgreSQL.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

---

## Overview

This is a backend REST API with no frontend. It receives HTTP requests and returns JSON responses.

It supports full CRUD operations:
- **C**reate a todo
- **R**ead one or all todos
- **U**pdate a todo
- **D**elete a todo

A todo contains:
| Field | Description |
|-------|-------------|
| `id` | Auto-generated unique identifier |
| `note` | The task description |
| `time_due` | When the task is due |
| `time_created` | When the todo was created |
| `time_updated` | When the todo was last updated |

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — Web framework
- **PostgreSQL** — Database
- **pg** — PostgreSQL client for Node.js
- **dotenv** — Environment variable management
- **nodemon** — Development auto-restart

## Project Structure
todo-backend/
├── controllers/
│   └── todo.controller.js
├── routes/
│   └── todo.routes.js
├── db.js
├── server.js
├── .env
└── package.json

---

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Chiderafrankie/todo-backend.git
cd todo-backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Create a `.env` file**

```env
DATABASE_URL=postgresql://your_username@localhost/todo_db
NODE_ENV=development
PORT=4040
```

**4. Create the database and table**

```bash
psql postgres
```

```sql
CREATE DATABASE todo_db;

\c todo_db

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  note TEXT NOT NULL,
  time_due TIMESTAMP NOT NULL,
  time_created TIMESTAMP DEFAULT NOW(),
  time_updated TIMESTAMP DEFAULT NOW()
);
```

**5. Start the development server**

```bash
npm run dev
```

Server runs at `http://localhost:4040`

## API Endpoints

### Create a Todo

POST /todos

Request body:
```json
{
  "note": "Buy groceries",
  "timeDue": "2026-12-25"
}
```

Response `201`:
```json
{
  "id": 1,
  "note": "Buy groceries",
  "time_due": "2026-12-25T00:00:00.000Z",
  "time_created": "2026-06-15T12:00:00.000Z",
  "time_updated": "2026-06-15T12:00:00.000Z"
}
```


### Get All Todos
GET /todos
Response `200`:
```json
[
  {
    "id": 1,
    "note": "Buy groceries",
    "time_due": "2026-12-25T00:00:00.000Z",
    "time_created": "2026-06-15T12:00:00.000Z",
    "time_updated": "2026-06-15T12:00:00.000Z"
  }
]
```

### Get One Todo
GET /todos/:id
Response `200`:
```json
{
  "id": 1,
  "note": "Buy groceries",
  "time_due": "2026-12-25T00:00:00.000Z",
  "time_created": "2026-06-15T12:00:00.000Z",
  "time_updated": "2026-06-15T12:00:00.000Z"
}
```

### Update a Todo
PUT /todos/:id
Request body:
```json
{
  "note": "Updated note",
  "timeDue": "2026-12-31"
}
```

Response `200`:
```json
{
  "id": 1,
  "note": "Updated note",
  "time_due": "2026-12-31T00:00:00.000Z",
  "time_created": "2026-06-15T12:00:00.000Z",
  "time_updated": "2026-06-15T13:00:00.000Z"
}
```


### Delete a Todo
DELETE /todos/:id
Response `204 No Content`

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NODE_ENV` | `development` or `production` |
| `PORT` | Port the server runs on |


## Author

**Chidera Frankie**
GitHub: [@Chiderafrankie](https://github.com/Chiderafrankie)
