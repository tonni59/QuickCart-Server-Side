# 📌 QuickCart – Full Stack E-Commerce Website

## 🚀 Project Overview
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
- ✅MongoDB database for users, products, and orders
- ✅Mongoose schemas for structured data modeling
- ✅REST APIs for handling client requests

## 🧠 User Experience & Design
- ✅Intuitive product browsing and filtering
- ✅Responsive layout using modern design principles
- ✅Interactive cart and checkout pages

## 🔐 Authentication & Security
- ✅JSON Web Tokens (JWT) for authentication
- ✅bcrypt for password encryption
- ✅Protected routes for admin and user roles

## 🛠 Tech Stack
### Frontend
- [React.js](https://react.dev/) – UI library
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management
- [Axios](https://axios-http.com/) – HTTP requests
- [React Router](https://reactrouter.com/) – Client-side routing
- [Bootstrap](https://getbootstrap.com/) / [Tailwind CSS](https://tailwindcss.com/) – Styling

### Backend
- [Node.js](https://nodejs.org/) – Runtime environment
- [Express.js](https://expressjs.com/) – Web framework
- [MongoDB](https://www.mongodb.com/) – Database
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) – Password hashing
- [jsonwebtoken (JWT)](https://jwt.io/) – Authentication
- [Multer](https://github.com/expressjs/multer) – File upload middleware
- [dotenv](https://github.com/motdotla/dotenv) – Environment variables

## 📂Repositories
- **Frontend Repo:** [Client Side](https://github.com/tonni59/QuickCart-Client-Side)  
- **Backend Repo:** [Server Side](https://github.com/tonni59/QuickCart-Server-Side)

---

## ⚙️ Setup & Installation

### ✅ Prerequisites
- Node.js (>= 14)
- MongoDB installed or cloud instance (MongoDB Atlas)
- Git

### ⚙️ Client Setup
1. Clone the client repository:
   ```bash
   git clone https://github.com/tonni59/QuickCart-Client-Side.git
   cd QuickCart-Client-Side
    ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Create a .env file in the root and add:
   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start development server:
   ```bash
   npm start
   ```

### 🖥️ Server Setup
1. Clone the server repository:
   ```bash
   git clone https://github.com/tonni59/QuickCart-Server-Side.git
   cd QuickCart-Server-Side
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root and add:
   ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLIENT_URL=http://localhost:3000

   ```
4. Start the server:
   ```bash
   npm run dev

   ```

## 📦 NPM Dependencies

```json
{
  "dependencies": {
    "@tanstack/react-query": "^5.64.2",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-modal": "^3.16.3",
    "react-rating": "^2.0.5",
    "react-rating-stars-component": "^2.2.0",
    "react-responsive-carousel": "^3.2.23",
    "react-router-dom": "^7.1.1",
    "react-toastify": "^11.0.3",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.23",
    "eslint": "^9.17.0",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
}


