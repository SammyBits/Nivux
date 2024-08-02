import { useState } from "react";
import { Products } from "../../../../components/cards/Products";
import { Pagination } from "../../../../components/common/Pagination";
import { Navbar } from "../../../../components/navbars/Navbar";
import { useProducts } from "../../../../hooks/useProducts";
import { NewProduct } from "../../../../data/models/ProductModel";
import { Modal } from "../../../../components/modals/products/createProduct";

export const ProductsPage = () => {
  const { products, createNewProduct, loading, error, setOffset } =
    useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
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
