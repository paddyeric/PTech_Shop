 PTech Shop

PTech Shop is a full-stack ecommerce web application for browsing products, searching by keyword, adding items to a cart, and checking out with Stripe. The app includes user authentication and admin-only product management features.

 Overview

- Frontend: React app with Bootstrap and Tailwind styling
- Backend: Express REST API with MongoDB and Mongoose
- Authentication: JWT-based login and session handling
- Payments: Stripe checkout integration
- Media: Cloudinary image uploads for products

 Project Structure:
- backend/         Express API, controllers, models, routes
- frontend/        React client app
- README.md        Project overview

 Features

 Customer-facing
- Browse and search products
- View product details
- Add products to cart
- Checkout using Stripe
- User signup, login, and logout

 Admin-facing
- Manage product listings
- Upload product images
- View registered users

 Tech Stack

 Frontend
- React 19
- React Router DOM
- Bootstrap + Tailwind CSS
- Axios
- React Toastify
- Stripe.js

 Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT
- Cloudinary
- Stripe
- Multer

 Prerequisites

- Node.js 18+
- npm
- MongoDB instance
- Stripe account (optional for checkout)
- Cloudinary account (optional for image uploads)

Environment Variables

Backend
Create a file named .env inside the backend folder:

env
- PORT=8000
- MONGODB_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- STRIPE_SECRET_KEY=your_stripe_secret_key
- CLOUDINARY_CLOUD_NAME=your_cloud_name
- CLOUDINARY_API_KEY=your_api_key
- CLOUDINARY_API_SECRET=your_api_secret


 Frontend
Create a file named .env inside the frontend folder:

env
REACT_APP_API_URL=http://localhost:8000/api


 Installation
1) Install root dependencies
bash
npm install


2) Install frontend dependencies
bash
npm install --prefix frontend

Running the App

Start the backend:
bash
npm run server

The backend runs at:
- http://localhost:8000


Start the frontend:
bash
npm start --prefix frontend

The frontend runs at:
- http://localhost:3000

Run both together
bash
- npm run dev

This starts the backend and frontend concurrently.

 API Overview
 
The backend exposes routes under:
- http://localhost:8000/api

 Authentication
- POST /api/users/signup
- POST /api/users/login
- POST /api/users/logout

 Products
- GET /api/products
- GET /api/products/:id
- POST /api/products/create
- PUT /api/products/:id
- DELETE /api/products/:id
- POST /api/add (admin-style product upload with images)

 Checkout
- POST /api/checkout-session

 Notes
- The frontend uses the API URL from the frontend environment variable.
- The backend validates JWT tokens from cookies or the Authorization header.
- Admin-only routes are protected by authentication and admin checks.
- Product image uploads are handled through Cloudinary.

 Main Backend and Frontend Entry Points
- Backend entry: backend/server.js
- Frontend entry: frontend/src/index.js
- Main app router: frontend/src/App.js

 Deploying with Render (Backend) and Vercel (Frontend)

 Backend on Render
1. Create a new Web Service on Render.
2. Connect your GitHub repository.
3. Set the root directory to the project root or the backend folder, depending on your setup.
4. Use the following build/start settings:
   - Build Command: npm install
   - Start Command: npm run server
5. Add these environment variables in Render:
   - PORT=8000
   - MONGODB_URI=your_mongodb_connection_string
   - JWT_SECRET=your_jwt_secret
   - STRIPE_SECRET_KEY=your_stripe_secret_key
   - CLOUDINARY_CLOUD_NAME=your_cloud_name
   - CLOUDINARY_API_KEY=your_api_key
   - CLOUDINARY_API_SECRET=your_api_secret
6. Deploy the service and copy the generated Render URL.

 Frontend on Vercel
1. Create a new Vercel project and import your GitHub repository.
2. Set the project root to the frontend folder.
3. Add this environment variable in Vercel:
   - REACT_APP_API_URL=https://your-render-backend-url/api
4. Deploy the project.

 Important notes
- Replace the backend URL in the frontend environment variable with your live Render URL.
- If your frontend uses a proxy or other API config, update it to point to the deployed backend.
- Make sure your MongoDB database allows connections from Render and Vercel-hosted apps if needed.
- For Stripe success/cancel redirects, update your backend Stripe callback URLs to your production frontend domain if required.
