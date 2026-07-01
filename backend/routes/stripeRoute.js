import express from "express";
const router = express.Router();
import { createStripeCheckoutSession } from "../controllers/stripeController.js";

router.post("/checkout-session", createStripeCheckoutSession);

export default router;