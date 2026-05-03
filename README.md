# 🏫 School Management API

[![Node.js Version](https://img.shields.io/badge/Node.js-v18+-green?logo=nodedotjs)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-v5.0-blue?logo=express)](https://expressjs.com)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-brightgreen.svg)](https://opensource.org/licenses/ISC)

A robust, production-ready backend service built with **Node.js** and **Express.js** to manage school records with geospatial intelligence. This API enables users to register schools and retrieve them sorted by proximity using the **Haversine Formula**.

---

## 🚀 Features

- **Geospatial Sorting:** Automatically calculates distances and sorts schools based on the user's current location.
- **Strict Validation:** Integrated with **Zod** for schema-level data integrity and type safety.
- **Clean Architecture:** Modular directory structure (MVC) for high maintainability.
- **Security First:** Parameterized SQL queries via `mysql2` to eliminate SQL injection risks.
- **Scalable Design:** Express 5.x core with asynchronous error handling.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js (v5.0)
- **Database:** MySQL
- **Validation:** Zod
- **API Testing:** Postman
- **Environment:** Dotenv

---

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js (v18 or higher)
- MySQL Server

### 2. Clone & Install
```bash
git clone <repository-url>
cd sc_management_BACKEND
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and populate it with your credentials:
```env
PORT=3000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=school_management
```

### 4. Run the Application
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

---

## 📡 API Documentation

### 1. Add School
Registers a new school in the database.

- **Endpoint:** `POST /addSchool`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "International Academy",
    "address": "456 Silicon Valley, CA",
    "latitude": 37.3382,
    "longitude": -121.8863
  }
  ```
- **Validation Rules:**
  - `name`: String, 1-255 characters.
  - `address`: String, 1-500 characters.
  - `latitude`: Number (-90 to 90).
  - `longitude`: Number (-180 to 180).

### 2. List Schools
Fetches all schools sorted by proximity to the provided coordinates.

- **Endpoint:** `GET /listSchools`
- **Query Parameters:**
  - `latitude`: (Required) User's current latitude.
  - `longitude`: (Required) User's current longitude.
- **Example:** `/listSchools?latitude=37.3382&longitude=-121.8863`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "International Academy",
      "address": "456 Silicon Valley, CA",
      "latitude": 37.3382,
      "longitude": -121.8863,
      "distance": 0.0
    },
    ...
  ]
  ```

### 3. Health Check
Monitor server status.
- **Endpoint:** `GET /health`

---

## 🏗️ Project Structure

```text
├── src
│   ├── config      # Database connection configuration
│   ├── controllers # Request handling logic
│   ├── middleware  # Validation & Auth middlewares
│   ├── models      # Database queries & logic
│   ├── routes      # API route definitions
│   └── utils       # Helper functions (Distance math)
├── app.js          # Entry point
└── .env            # Environment variables
```

---

## 📊 Data Model
The system uses a single `schools` table with the following schema:
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | INT | Primary Key, Auto-increment |
| `name` | VARCHAR(255) | Name of the school |
| `address` | VARCHAR(500) | Full physical address |
| `latitude` | FLOAT | Geographic latitude |
| `longitude` | FLOAT | Geographic longitude |

---

## 🧪 Testing
A complete **Postman Collection** is included in the repository:
`School_Management_API.postman_collection.json`

Import this into Postman to quickly test all endpoints with pre-configured environment variables.

---

## 📝 License
This project is licensed under the **ISC License**.

