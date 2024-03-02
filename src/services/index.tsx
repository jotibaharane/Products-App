import { Product, ProductResponse } from '@/types';

export const getAllProducts = async (): Promise<ProductResponse> => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching product`);
  }
};

export const getProductById = async (productId: number): Promise<Product> => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching product`);
  }
};
