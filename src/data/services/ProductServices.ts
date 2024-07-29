import { API_URL } from "../const";
import { NewProduct, Product } from "../models/ProductModel";

export const fetchProducts = async (offset?: number, limit?: number): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products?offset=${offset}&limit=${limit}`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = (await response.json()) as Product[];

  if (!data) throw new Error("Failed to parse products");

  if (!Array.isArray(data)) throw new Error("Invalid products data");

  return data;
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = (await response.json()) as Product;

  if (!data) throw new Error("Failed to parse product");

  return data;
};

export const createProduct = async (product: NewProduct): Promise<Product> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Failed to create product");

  const data = (await response.json()) as Product;

  if (!data) throw new Error("Failed to parse product");

  return data;
};

export const updateProduct = async (
  id: number,
  post: Product
): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Failed to update post");

  const data = (await response.json()) as Product;

  if (!data) throw new Error("Failed to parse post");

  return data;
};
/**
 * Remove a product from the database
 * @param id Id of the product to remove
 * @returns   True if the product was removed successfully
 */
export const deleteProduct = async (id: number): Promise<boolean> => {
  const response = await fetch(`${API_URL}/product/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete product");

  return true;
};
