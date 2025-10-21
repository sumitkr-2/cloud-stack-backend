Cloud Stack Backend Project

This repository contains the backend server for the Cloud Stack project. It is built with Node.js, Express, and MongoDB and provides a set of REST APIs for user authentication and file handling.

✨ Features

User Authentication: Secure user signup and login.

Database Integration: Connects to a MongoDB database to persist user data.

API Endpoints: Provides clear and functional endpoints for core features.

Cloud-Ready: Designed to be easily extended with cloud storage features.

🛠️ Tech Stack

Server: Node.js, Express.js

Database: MongoDB with Mongoose

File Handling: Multer for processing multipart/form-data

🚀 Getting Started

Follow these instructions to get a local copy up and running.

Prerequisites

Node.js installed

A MongoDB Atlas account (or a local MongoDB server)

Installation & Setup

Clone the repository:

git clone [https://github.com/sumitkr-2/cloud-stack-backend.git](https://github.com/sumitkr-2/cloud-stack-backend.git)
cd cloud-stack-backend


Install NPM packages:

npm install


Create a .env file in the root of the project and add your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string_here


Start the server:

node index.js


The server will be running on http://localhost:5000.

🧪 API Endpoints

You can use a tool like Postman to test the endpoints.

User Routes

POST /signup: Create a new user.

Body: {"username": "testuser", "password": "password123"}

Success Response: {"message": "Signup successful!"}

POST /login: Log in an existing user.

Body: {"username": "testuser", "password": "password123"}

Success Response: {"message": "Login successful!"}

File Route

POST /uploadFile: Upload a file.

Body: Form-data with a key file and a file selected.

Success Response: {"message": "File uploaded successfully (stored locally)", "fileInfo": {...}}