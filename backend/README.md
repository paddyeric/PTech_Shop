# Backend (Express + MongoDB)

REST API for the ecommerce app: authentication + admin-protected product management.

---

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Multer (image upload)

---

## Setup

### 1) Environment variables

Create `backend/.env` (or export variables in your environment) with:

- `PORT` (optional, default: `8000`)
- `MONGODB_URI` (required)
- `JWT_SECRET` (required)

The backend reads these in:
- `backend/config/dbConfig.js`
- `backend/middlewares/authMiddleware.js`
- `backend/server.js`

### 2) Install & run

From project root:

```bash
npm install
npm start
```

Or from `backend/` you can still run `node server.js` if you manage dependencies accordingly.

---

## API Endpoints

Base URL:

- `http://localhost:<PORT>/api`

### Users / Auth

- `POST /api/users/login`
- `POST /api/users/signup`
- `POST /api/users/logout`

Admin only:

- `GET /api/users/getusers`
- `GET /api/users/:userId`

### Products

Public:

- `GET /api/products`
- `GET /api/products/:productId`

Admin only (protected by JWT + `isAdmin`):

- `POST /api/products/create/:userId`
- `PUT /api/products/:productId/:userId`
- `DELETE /api/products/:productId/:userId`

---

## Auth Details (JWT)

JWT is verified in `backend/middlewares/authMiddleware.js`.

Token source:
- `cookies.jwt` (preferred if cookie is set)
- `Authorization: Bearer <token>` (also supported)

---

## Notes

- MongoDB connection is handled in `backend/config/dbConfig.js`.
- Errors are centralized in `backend/middlewares/errorMiddleware.js`.
- Product CRUD is implemented in `backend/controllers/productController.js`.

