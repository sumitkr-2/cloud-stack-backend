---

# 🌥️ Cloud Stack Backend Project

This repository contains the backend server for the **Cloud Stack** project. It is built with **Node.js**, **Express**, and **MongoDB**, and provides a set of REST APIs for user authentication and file handling.

---

## ✨ Features

* 🔐 **User Authentication**: Secure user signup and login functionality.
* 🗃️ **Database Integration**: Connects to MongoDB to persist user data.
* 📡 **API Endpoints**: Provides clear and functional REST APIs for core backend features.
* ☁️ **Cloud-Ready**: Designed to be easily extended with cloud storage features in the future.

---

## 🛠️ Tech Stack

| Layer       | Technology                   |
| ----------- | ---------------------------- |
| Server      | Node.js, Express.js          |
| Database    | MongoDB (with Mongoose)      |
| File Upload | Multer (multipart/form-data) |

---

## 🚀 Getting Started

Follow the instructions below to set up the project locally.

### ✅ Prerequisites

* Node.js installed on your machine
* A MongoDB Atlas account *(or a local MongoDB instance)*

### 🔧 Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/sumitkr-2/cloud-stack-backend.git
cd cloud-stack-backend
```

2. **Install the dependencies:**

```bash
npm install
```

3. **Create a `.env` file** in the root directory and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string_here
```

4. **Start the server:**

```bash
node index.js
```

The server will start at: **[http://localhost:5000](http://localhost:5000)**

---

## 🧪 API Endpoints

Use a tool like **Postman** or **Insomnia** to test the API routes.

### 👤 User Routes

#### 📩 `POST /signup`

* **Description**: Register a new user.
* **Request Body** (JSON):

```json
{
  "username": "testuser",
  "password": "password123"
}
```

* **Success Response**:

```json
{
  "message": "Signup successful!"
}
```

---

#### 🔐 `POST /login`

* **Description**: Log in an existing user.
* **Request Body** (JSON):

```json
{
  "username": "testuser",
  "password": "password123"
}
```

* **Success Response**:

```json
{
  "message": "Login successful!"
}
```

---

### 📁 File Upload Route

#### 📤 `POST /uploadFile`

* **Description**: Upload a file.

* **Request Body**: Use `form-data` with a key named `file` and attach a file.

* **Success Response**:

```json
{
  "message": "File uploaded successfully (stored locally)",
  "fileInfo": {
    // file metadata
  }
}
```

---

## 📬 Contact

Maintained by [@sumitkr-2](https://github.com/sumitkr-2)

---
