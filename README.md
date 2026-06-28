# 📌 CollEdge Connect – MERN Task Tracker

A modern, full-stack **Task Tracker Web Application** built using the **MERN Stack**. The application enables users to create, manage, update, and organize tasks through an intuitive sticky-note style interface with real-time updates and persistent storage using MongoDB.

## 🚀 Live Demo

* **Frontend:** https://coll-edge-connect-lac.vercel.app
* **Backend API:** https://colledge-connect-rx14.onrender.com/api/tasks

---

## 📖 Project Overview

This project was developed as part of the **COLL-EDGE CONNECT Full Stack Developer Internship Technical Assignment**.

The application demonstrates core full-stack development concepts including:

* RESTful API development
* MongoDB database integration
* React component architecture
* CRUD operations
* Client-server communication using Axios
* Responsive UI design
* Full-stack deployment

---

# ✨ Features

### ✅ Task Management

* Create new tasks
* View all tasks
* Edit existing tasks
* Delete tasks

### ✅ Task Details

* Title
* Description
* Status

  * Pending
  * In Progress
  * Completed
* Due Date

### ✅ Smart UI Features

* Sticky note inspired interface
* Status-based note colors
* Filter tasks by status
* Live task counters
* Responsive design
* Empty state messages
* Loading & error handling
* Toast notifications
* Dynamic updates without page refresh

---

# 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Hot Toast
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📁 Project Structure

```
CollEdge-Connect/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Dev-hashh/CollEdge-Connect.git

cd CollEdge-Connect
```

---

## 2. Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run backend:

```bash
npm run dev
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000/api/tasks
```

Run frontend:

```bash
npm run dev
```

---

# 📡 API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/tasks`     | Get all tasks   |
| GET    | `/api/tasks/:id` | Get single task |
| POST   | `/api/tasks`     | Create task     |
| PUT    | `/api/tasks/:id` | Update task     |
| DELETE | `/api/tasks/:id` | Delete task     |

---

# 🌟 Highlights

* Full MERN Stack Application
* Clean REST API Architecture
* Modular Component Structure
* MongoDB Atlas Integration
* Responsive User Interface
* Environment Variable Configuration
* Production Deployment
* Error Handling & Validation
* Modern Sticky Note Design

---

# 📸 Screenshots

> Add screenshots of the deployed application here.

---

# 👨‍💻 Author

**Dev Kumar**

* GitHub: https://github.com/Dev-hashh

---

# 📄 License

This project was created for educational purposes as part of the COLL-EDGE CONNECT Full Stack Developer Internship assignment.
