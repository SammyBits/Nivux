import { Navbar } from "../../components/navbars/Navbar";
import { useProducts } from "../../hooks/useProducts";

export const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
       <Navbar>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Add Product
        </button>
      </Navbar>
      <h1>Products</h1>
      <div className="grid grid-cols-7 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded">
            <img src={product.images[0]} alt={product.title} width={720}/>
            <h2 className="text-center text-lg">{product.title}</h2>
            <p className="text-pretty text-md font-light">{product.description.slice(0, 100)}...</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
