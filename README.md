# 📝 Todo App (CRUD API)

A simple **Todo application backend** built with **Node.js**, **Express**, and **MongoDB** that supports basic **CRUD operations** (Create, Read, Update, Delete).

This project is intentionally kept **simple** and **authentication-free** for now. Features like **authentication, authorization, JWT, bcrypt, roles**, etc. will be added in future versions.

---

## 🚀 Features

* Create a todo
* Get all todos
* Get a single todo by IDUpdate a todo
* Delete a todo
* MongoDB database integration
* Clean REST API structure

---

## 🛠 Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for MongoDB
* **dotenv** – Environment variable management

---

## 📂 Project Structure

```
Todo/
│
├── controllers/
│   └── todoController.js
│
├── models/
│   └── todo.js
│
├── routes/
│   └── todoRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd Todo
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/todoApp
```

### 4️⃣ Start the server

```bash
npm run dev
```

OR

```bash
npx nodemon index.js
```

Server will run on:

```
http://localhost:8000
```

---

## 📌 API Endpoints

### ➕ Create Todo

```
POST /api/v1/todo
```

**Body (JSON):**

```json
{
  "task": "Finish backend API",
  "deadline": "2026-02-10"
}
```

---

### 📄 Get All Todos

```
GET /api/v1/todos
```

---

### 🔍 Get Todo by ID

```
GET /api/v1/todo/:id
```

---

### ✏️ Update Todo

```
PATCH /api/v1/update/:id
```

**Body (any one field):**

```json
{
  "task": "Updated task",
  "isComplete": true
}
```

---

### ❌ Delete Todo

```
DELETE /api/v1/delete/:id
```

---

## 🧪 Testing

* API tested using **Postman**
* Content-Type: `application/json`

---

## 🧠 Future Enhancements

* Authentication & Authorization
* JWT-based login system
* Password hashing using bcrypt
* User-specific todos
* Role-based access control
* Pagination & filtering
* Validation middleware

---

## 📚 Learning Purpose

This project is built for:

* Understanding REST APIs
* Learning Express + MongoDB integration
* Practicing CRUD operations
* Backend fundamentals before adding security layers

---

## 🤝 Contribution

Feel free to fork this repository and enhance it. Pull requests are welcome.

---

## 📜 License

This project is licensed under the **MIT License**.

---

### ⭐ If you find this project helpful, give it a star!

Happy Coding 🚀
