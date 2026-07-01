import express from "express";
const router = express.Router();
import { protect, admin } from "../middlewares/authMiddleware.js";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct,
  addProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";


router.get("/products", getProducts);
router.post("/products/create", createProduct);
router.route("/products/:id").get(getProductById).put(updateProduct).delete(removeProduct)
router.post('/add', upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
]), addProduct);


export default router;