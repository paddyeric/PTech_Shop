import axios from "axios";
import { API } from "./apiConfig";


export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getProductsById = async (id) => {
  try {
    const response = await axios.get(`${API}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Cannot fetch product by ID", error);
    throw error;
  }
};


export const deleteUser = async (id) => {
  const response = await fetch(`${API}/api/users/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
  return response.json();
};

export const createUser = async (userData) => {
  const response = await fetch(`${API}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
};


export const deleteProduct = async (id)=>{

  const response = await fetch(`${API}/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
    return response.json();

}

export const createProduct = async (productData) => {
    const response = await fetch(`${API}/products/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    return response.json();
}