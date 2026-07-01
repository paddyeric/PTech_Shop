import mongoose from "mongoose";

const dbConnection = () => {

  const db = process.env.MONGODB_URI;
  if (!db) {
    console.error("MONGODB_URI is not set in environment variables");
  } else {
    mongoose
      .connect(db)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB connection failed:", err));
  }
  
};

export default dbConnection;
