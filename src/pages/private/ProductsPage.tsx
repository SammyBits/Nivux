import { useState } from "react";
import { Products } from "../../components/cards/Products";
import { Pagination } from "../../components/common/Pagination";
import { Navbar } from "../../components/navbars/Navbar";
import { useProducts } from "../../hooks/useProducts";
import { NewProduct } from "../../data/models/ProductModel";
import { Modal } from "../../components/modals/products/createProduct";
import { Button } from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const { products, createNewProduct, loading, error, setOffset } =
    useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddProduct = (newProduct: NewProduct) => {
    createNewProduct(newProduct);
    setIsModalOpen(false);
  };

  // Lógica para manejar el clic en los botones de paginación
  const handlePrevClick = () => {
    setOffset((prev) => Math.max(prev - 10, 0)); // Evita el desplazamiento negativo
  };

  const handleNextClick = () => {
    setOffset((prev) => prev + 10); // Incrementa el offset
  };

  return (
    <div className="p-5 min-h-screen bg-[#111827]">
      <Navbar>
        <Button title="Home" onClick={() => navigate("/")} />
        <Button title="Add Product" onClick={() => setIsModalOpen(true)} />
      </Navbar>
      <div className="grid grid-cols-7 gap-6 mt-6">
        <Products products={products} />
      </div>

      <Pagination
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddProduct}
      />
    </div>
  );
};
