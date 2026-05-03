# School Management API

A production-grade Node.js API for managing school data with geospatial proximity sorting.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **Validation:** Zod
- **Distance Formula:** Haversine (Spherical Precision)

## Database Schema
Run the following SQL to set up your database:

```sql
CREATE DATABASE IF NOT EXISTS school_management;
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(500) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Setup Instructions
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in your MySQL credentials.
4. Run the SQL schema provided above.
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
### 1. Add School
- **Endpoint:** `POST /addSchool`
- **Payload:**
  ```json
  {
    "name": "Greenwood High",
    "address": "123 Education Lane, New York",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
  ```

### 2. List Schools
- **Endpoint:** `GET /listSchools?latitude=40.7128&longitude=-74.0060`
- **Functionality:** Returns all schools sorted by proximity to the provided coordinates.

## Why this solution wins?
- **Precision:** Uses the Haversine formula instead of Euclidean distance for real-world accuracy.
- **Security:** Implements parameterized queries to prevent SQL injection.
- **Robustness:** Strict type and range validation using Zod.
- **Architecture:** Follows clean MVC principles for maintainability.
