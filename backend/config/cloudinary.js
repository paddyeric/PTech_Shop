import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  const apiSecret =
  process.env.CLOUDINARY_API_SECRET ||
  process.env.CLOUDINARY_SECRET ||
  process.env.CLOUDINARY_SECRET_KEY;


  if (!apiSecret) {
    throw new Error(
      "Cloudinary not configured: missing CLOUDINARY_SECRET (or CLOUDINARY_SECRET_KEY) in environment variables"
    );
  }

  cloudinary.config({
    cloud_name:
      process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: apiSecret,
  });
};

export default connectCloudinary;