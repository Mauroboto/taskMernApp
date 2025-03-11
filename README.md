# TaskMernApp 📝

A task management application built with the following stack (MongoDB, Express, Node.js).

## 🚀 Features

- Create, read, update, and delete tasks (full CRUD)
- User authentication
- MongoDB data persistence
- RESTful API

## 🛠️ Technologies Used


- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT for authentication

## 📋 Prerequisites

- Node.js (version 14 or higher)
- MongoDB installed and running locally
- npm or yarn as package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mauroboto/taskMernApp.git
   cd taskMernApp
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the backend folder with:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   PORT=4000
   ```

## 🚀 Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```



The application will be available at `http://localhost:5173` and the API at `http://localhost:4000`

## 📁 Project Structure

```
taskMernApp/
├── backend/
│   ├── src/
│   │   ├── controllers/    # API Controllers
│   │   ├── models/         # MongoDB Models
│   │   ├── routes/         # API Routes
│   │   ├── middlewares/    # Custom Middlewares
│   │   └── app.js         # Express main configuration
│   └── package.json

```

## 📌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 👤 Authentication

The application uses JWT (JSON Web Tokens) for authentication. The token must be included in the request header as:

```
Authorization: Bearer <token>
```

## 💾 Data Models

### User
```javascript
{
  username: String,
  email: String,
  password: String,
  createdAt: Date
}
```

### Task
```javascript
{
  title: String,
  description: String,
  completed: Boolean,
  user: ObjectId,
  createdAt: Date
}
```

## 🔐 Security

- Passwords hashed using bcrypt
- Frontend and backend data validation
- XSS protection
- CORS handling
- Environment variables for sensitive data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## ✉️ Contact

Mauro Boto - [@MauroBoto](https://github.com/Mauroboto)

Project Link: [https://github.com/Mauroboto/taskMernApp](https://github.com/Mauroboto/taskMernApp)
