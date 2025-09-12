# QuickCart - Full Stack E-commerce Website

## Project Overview
QuickCart is a full-stack e-commerce platform designed to provide a smooth online shopping experience. It features product browsing, cart management, secure checkout, and an admin dashboard for managing products and orders.

### 🔑Default Credentials
- **Admin Email:** admin@example.com  
- **Password:** password

## ✨ Features & Functionality
- 👤 User authentication (JWT) & role-based access.
- 🛍 Product listing, searching, filtering, and management.
- 🛒 Shopping cart functionality with quantity updates.
- 📦 Order creation & history tracking.
- 📤 Image uploads stored in uploads/.
- 📱 Responsive frontend UI.

## 📊 Data Handling
- MongoDB database for users, products, and orders
- Mongoose schemas for structured data modeling
- REST APIs for handling client requests

## 🎨 User Experience & Design
- Intuitive product browsing and filtering
- Responsive layout using modern design principles
- Interactive cart and checkout pages

## 🔐 Authentication & Security
- JSON Web Tokens (JWT) for authentication
- bcrypt for password encryption
- Protected routes for admin and user roles

## 🛠 Tech Stack
## Frontend
- Built with React.js
- State management with Redux
- Axios for API requests

## Backend
- Node.js + Express.js
- MongoDB with Mongoose ORM
- RESTful API structure

## Tools and Libraries
- React, Redux, Axios, React Router
- Express, Mongoose, bcrypt, JWT
- Multer for image uploads
- dotenv for environment management

## Repositories
- **Frontend (Client-side):** [QuickCart Frontend]([https://github.com/tonni59/QuickCart-Client-Side](https://github.com/tonni59/QuickCart))  
- **Backend (Server-side):** [QuickCart Backend]([https://github.com/tonni59/QuickCart-Server-Side](https://github.com/tonni59/QuickCart-Server-Side))

---

## ⚙️ Setup & Installation

### ✅ Prerequisites
- Node.js (>= 14)
- MongoDB installed or cloud instance (MongoDB Atlas)
- Git

### 🔧 Client Setup
```bash
### Clone repository
git clone https://github.com/tonni59/QuickCart-Client-Side.git
cd QuickCart-Client-Side

# Install dependencies
npm install

# Create a .env file in root and configure environment variables
# Example:
REACT_APP_API_URL=http://localhost:5000

# Start development server
npm start
```

### 🖥️ Server Setup
```bash
# Clone repository
git clone https://github.com/tonni59/QuickCart-Server-Side.git
cd QuickCart-Server-Side

# Install dependencies
npm install

# Create a .env file in root and configure variables
# Example:
MONGO_URI=mongodb://localhost:27017/quickcart
JWT_SECRET=yourSecretKey
PORT=5000

# Start the server
npm run dev
```

### 📦Server NPM Dependencies
Backend: express, mongoose, bcryptjs, jsonwebtoken, dotenv, multer, nodemon
Frontend: react, react-router-dom, axios, tailwindcss
