import React from "react";
import { NewProduct } from "../../data/models/ProductModel";

interface ProductFormProps {
  product: NewProduct;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export const ProductForm = ({
  product,
  onChange,
  onSubmit,
  onClose,
}: ProductFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={product.title}
          onChange={onChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          value={product.price}
          onChange={onChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={onChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={product.categoryId}
          onChange={onChange}
          className="border rounded p-2 w-full"
          required
        >
          <option value="0">Select a category</option>
          {/* Add your category options here */}
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700">
          Images
        </label>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Close
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
