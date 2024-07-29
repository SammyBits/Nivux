import { useCallback, useEffect, useState } from "react";
import { Product } from "../data/models/ProductModel";
import { fetchProducts } from "../data/services/ProductServices";
import { useToken } from "../stores/useToken";

export const useProducts = () => {
  const { isValid } = useToken();
  const [products, setProducts] = useState<Product[]>([]);
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

      const products = await fetchProducts();
      const limitedProducts = products.slice(1, 5); // Limitar a los primeros 10 productos

      setProducts(limitedProducts);
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setLoading(false);
    }
  }, [isValid]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { products, loading, error };
};
