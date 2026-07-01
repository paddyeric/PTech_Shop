import asyncHandler from "../middlewares/asyncHandle.js";
import Product from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";


const getProducts = async (req, res) => {
  try {
    const {
      search,
      name,
    } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (name && name !== "all") {
      query.name = name;
    }

    const products = await Product.find(query);

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching products" });
  }
};

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      image: req.body.image,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      // user: req.user?._id,
    });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const addProduct = async (req, res, next) => {
  try {
    const { name, brand, category, description, price } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];

    const images = [image1, image2, image3].filter((img) => img !== undefined);

    let imagesURL = await Promise.all(
      images.map(async (img) => {
        let result = await cloudinary.uploader.upload(img.path, {
          resource_type: "image",
        });

        return result.secure_url;
      }),
    );

    const productData = {
      name,
      brand,
      category,
      description,
      price: Number(price),
      image: imagesURL,
    };
    console.log(productData);
    const product = new Product(productData);
    await product.save();

    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    // product.image = image;
    product.brand = brand;
    product.category = category;
    product.description = description;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

const removeProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  removeProduct,
  addProduct,
};
