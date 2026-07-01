import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import dbConnection from "./config/dbConfig.js";
import connectCloudinary from './config/cloudinary.js';
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import stripeRoute from './routes/stripeRoute.js'

const PORT = process.env.PORT || 8000;
const app = express();

dotenv.config();

dbConnection();
connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", userRoute);
app.use("/api", productRoute);
app.use("/api", stripeRoute); 

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`server running on Port ${PORT}`);
});