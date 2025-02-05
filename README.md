# CineCritic - Movie Review App

CineCritic is a movie review web application that allows users to browse movies and submit reviews. The application is built using React for the frontend and Spring Boot for the backend.

## Features

- Browse a collection of movies
- View trailers for movies
- Submit and view reviews for movies
- Responsive UI for seamless user experience

## Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- Java Spring Boot
- MongoDB
- Maven

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [Java 17+](https://www.oracle.com/ie/java/technologies/downloads/) (for Spring Boot)
- [MongoDB](https://www.mongodb.com/)
- [Maven](https://maven.apache.org/download.cgi)

### Installation and Running the Project

#### 1. Clone the Repository

```sh
git clone https://github.com/rohanshanavas/cinecritic-movie-review-app.git
cd cinecritic-movie-review-app
```

#### 2. Import Movie Data to MongoDB

There is a `movies.json` file in the root directory of the project. Import this file into your MongoDB database using the following command:

```sh
mongoimport --uri "your_mongodb_connection_string" --db your_database_name --collection movies --file movies.json --jsonArray
```

Make sure to replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_database_name` with the name of your database.

#### 3. Configure Environment Variables

Navigate to the `server/src/main/resources/` directory and rename the `.env.example` file to `.env`. Then, update it with your MongoDB details:

```
# Mongo Database Details

MONGO_DATABASE=
MONGO_USER=
MONGO_PASSWORD=
MONGO_CLUSTER=

# Frontend URL for CORS

FRONTEND_URL=
```

#### 4. Setup and Run Backend (Spring Boot)

```sh
cd server
mvn clean install
mvn spring-boot:run
```

This starts the backend server on `http://localhost:8080`.

#### 5. Setup and Run Frontend (React)

```sh
cd client
npm install
npm run dev
```

This starts the frontend on `http://localhost:5173` (Vite default port).

## Project Structure

```
cinecritic-movie-review-app/
├── client/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   ├── assets/
├── server/         # Spring Boot backend
│   ├── src/main/java/dev/rohan/movies/
│   ├── src/main/resources/application.properties
│   ├── src/main/resources/.env.example  # Environment file
│   ├── pom.xml
├── movies.json     # Movie dataset for MongoDB
```

## API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | `/api/movies`      | Fetch all movies       |
| GET    | `/api/movies/{id}` | Fetch a specific movie |
| POST   | `/api/reviews`     | Submit a new review    |


