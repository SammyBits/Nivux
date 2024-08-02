import React, { useState, useCallback } from "react";
import { NewProduct } from "../../../data/models/ProductModel";
import ProductForm from "../../forms/ProductForm";

interface ModalContentProps {
  onClose: () => void;
  onSubmit: (data: NewProduct) => void;
}

export const ModalContent = ({ onClose, onSubmit }: ModalContentProps) => {
  const [product, setProduct] = useState<NewProduct>({
    title: "",
    price: 0,
    description: "",
    categoryId: 1,
    images: [
      "https://yt3.ggpht.com/efEczXhBip5bXIxaKg1yJiyJ7q6qjZTXeXXxbqTbsntsy-DCpD6jMMm6-bbJy9wPNWx1kHhSKTE=s68-c-k-c0x00ffffff-no-rj",
    ],
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setProduct((prev) => ({
        ...prev,
        [name]: name === "price" ? parseFloat(value) : value,
      }));
    },
    [] // Dependencias vacías, se usa como función constante
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(product);
    },
    [onSubmit, product] // Solo cambia cuando `onSubmit` o `product` cambian
  );

  return (
    <>
      <h2 className="text-xl mb-4">Add New Product</h2>
      <ProductForm
        product={product}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClose={onClose}
      />
    </>
  );
};
