Ecommerce Web App (Frontend + Backend)

Full-stack ecommerce application built with React (frontend), Express (backend), and MongoDB (Mongoose).


 Project Layout

- `frontend/` — React UI + auth helpers
- `backend/` — Express API, MongoDB models/controllers, routes


 Features

- User authentication (JWT)
- Signup / Login / Logout
- Admin-only user and product management
- Product CRUD protected by JWT + `isAdmin`
- Image upload support via Multer (`uploads/`)


 Requirements

- Node.js
- MongoDB


 Backend Setup (Express)

 Environment Variables

Create `backend/.env` with:

- `PORT` (optional, default: `8000`)
- `MONGODB_URI` (required)
- `JWT_SECRET` (required)

Backend entry:
- `backend/server.js`

 Install & Run Backend

From project root:

bash
npm install
npm start

(Starts: `node backend/server.js`)

Backend base URL:
- `http://localhost:<PORT>/api`


 Frontend Setup (React)

 Environment Variables

Create `frontend/.env` with:

- `REACT_APP_API_URL` (required)
  - Example: `http://localhost:8000/api`

Frontend reads this from:
- `frontend/src/api/apiConfig.js`

 Install & Run Frontend

From project root:

bash
npm run client


Or from `frontend/`:

bash
cd frontend
npm install
npm start

Frontend URL:
- http://localhost:3000


 Run Both Together (Recommended)

From the project root:

bash
npm install
npm run dev

This runs both:
- backend (`npm run server`)
- frontend (`npm start --prefix frontend`)


 API Reference

 Users / Auth

- `POST /api/users/login`
  - Body: `{ email, password }`

- `POST /api/users/signup`
  - Body: `{ name, email, password }`

- `POST /api/users/logout`

Admin only:

- `GET /api/users/getusers`
- `GET /api/users/:userId`

Auth mechanism:
- JWT is verified in `backend/middlewares/authMiddleware.js`
- Token source supported:
  - `cookies.jwt`
  - `Authorization: Bearer <token>`

 Products

Public:

- `GET /api/products`
- `GET /api/products/:productId`

Admin only (protected):

- `POST /api/products/create/:userId`
- `PUT /api/products/:productId/:userId`
- `DELETE /api/products/:productId/:userId`


 Common Files

- Frontend auth helpers: `frontend/src/auth/authentication.js`
- Login UI: `frontend/src/pages/LoginPage.jsx`
- Backend routes:
  - `backend/routes/userRoute.js`
  - `backend/routes/productRoute.js`


 Notes

- MongoDB connection handled in `backend/config/dbConfig.js`
- Central error handling in `backend/middlewares/errorMiddleware.js`