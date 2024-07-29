import { useCallback, useEffect, useState } from "react";
import { NewProduct, Product } from "../data/models/ProductModel";
import { createProduct, fetchProducts } from "../data/services/ProductServices";
import { useToken } from "../stores/useToken";

export const useProducts = () => {
  const { isValid } = useToken();
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 7;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Usamos useCallback para que la funcion no se vuelva a crear en cada renderizado
   * Por ejemplo tenemos un useEffect que depende de esta funcion, si no usamos useCallback, el useEffect se ejecutara en cada renderizado
   * @returns
   */
  const getProducts = useCallback(async () => {
    try {
      if (!isValid) {
        throw new Error("Token is not valid");
      }

      const products = await fetchProducts(offset, limit);

      setProducts(products);
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setLoading(false);
    }
  }, [isValid, offset]);

  /**
   * Funcion para crear un nuevo producto
   * @param newProduct Nuevo producto a crear
   */
  const createNewProduct = async (newProduct: NewProduct) => {
    try {
      if (!isValid) {
        throw new Error("Token is not valid");
      }

      const product = await createProduct(newProduct);
      setProducts((prevProducts) => [product, ...prevProducts]);
    } catch (error) {
      setError("Error creating product");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Usamos useEffect para ejecutar la funcion getProducts cuando el componente se renderiza por primera vez
   */
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { products, loading, error, createNewProduct, setOffset };
};
