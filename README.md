# 📝 Notes App

A full stack notes application built with **React**, **Express**, and **MongoDB**. Created as a learning project to understand backend CRUD operations, REST APIs, and monolithic deployment (serving a React frontend from an Express backend).

---

## 🚀 Features

- ✅ Create new notes with a title and description
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 💾 Data persisted in MongoDB
- 🎨 Clean dark UI with smooth modal animations

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Axios (HTTP requests)
- CSS (custom dark theme)

**Backend**
- Node.js
- Express 4
- MongoDB + Mongoose

---

## 📁 Project Structure

```
Notes/
├── public/             # React production build (output of npm run build)
│   ├── assets/
│   │   ├── index.js
│   │   └── index.css
│   └── index.html
├── src/
│   ├── config/         # DB connection
│   ├── models/         # Mongoose models
│   └── app.js          # Express app & API routes
├── server.js           # Entry point
├── package.json
└── .gitignore
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Fetch all notes |
| POST | `/api/notes` | Create a new note |
| PATCH | `/api/notes/:id` | Update a note by ID |
| DELETE | `/api/notes/:id` | Delete a note by ID |

---

## ⚙️ Setup & Installation

### 1. Clone the repo
```bash
git clone https://github.com/tajindervirk/Notes.git
cd Notes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Run the server
```bash
node server.js
```

The app will be running at `http://localhost:3000`

---

## 🏗️ Monolithic Deployment

This project uses a **monolithic deployment** approach — the React frontend is built and served directly from the Express backend on the same port.
---

## 🧠 What I Learned

- Building a REST API with full **CRUD operations** using Express & MongoDB
- Handling **wildcard routes** to support client-side routing
- **Monolithic deployment** — serving a React production build from an Express server on a single port
- Connecting React frontend to a backend API using **Axios**
- Managing UI state with a single `modalNote` state to handle both **create and edit** in one modal
