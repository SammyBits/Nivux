export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface NewProduct {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}
