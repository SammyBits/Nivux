import React from "react";
import { Product } from "../../data/models/ProductModel";
import { Title } from "../common/Title";
import { Image } from "../common/Image";
interface props {
  products: Product[];
}
/**
 * Products component to display products
 * @param param products array
 * @returns Products component
 */
export const Products = ({ products }: props) => {
  return products.map((product) => (
    <div key={product.id} className="bg-gray-100 p-4 rounded">
      <Image src={product.images} alt={product.title} />
      <Title title={product.title} key={product.id} style="text-md" />
      <p className="text-pretty text-md font-light">
        {product.description.slice(0, 100)}...
      </p>
      <p>${product.price}</p>
    </div>
  ));
};
