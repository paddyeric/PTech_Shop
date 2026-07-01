import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  logoutUser,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
import { getUserById } from "../controllers/userController.js";


router.post("/users/login", loginUser);
router.post("/users/signup", registerUser);
router.post("/users/logout", logoutUser);
router.get("/users/getusers", protect, admin, getUsers);
router.get("/users/:id", protect, admin, getUserById);


export default router;