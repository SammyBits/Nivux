import { API_URL } from "../const";
import { Product } from "../models/ProductModel";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products `);
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = (await response.json()) as Product[];

  if (!data) throw new Error("Failed to parse products");

  if (!Array.isArray(data)) throw new Error("Invalid products data");

  return data;
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(
    `${API_URL}/products/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = (await response.json()) as Product;

  if (!data) throw new Error("Failed to parse product");

  return data;
};

export const createProduct = async (post: Product): Promise<Product> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to create product");

  const data = (await response.json()) as Product;

  if (!data) throw new Error("Failed to parse product");

  return data;
};

export const updateProduct = async (id: number, post: Product): Promise<Product> => {
  const response = await fetch(
    `${API_URL}/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }
  );
  if (!response.ok) throw new Error("Failed to update post");

  const data = (await response.json()) as Product;

  if (!data) throw new Error("Failed to parse post");

  return data;
};

export const deleteProduct = async (id: number): Promise<boolean> => {
  const response = await fetch(
    `${API_URL}/product/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) throw new Error("Failed to delete product");

  

  return true;
};
