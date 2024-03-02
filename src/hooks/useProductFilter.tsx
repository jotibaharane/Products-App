import { debounce } from '@/helpers';
import { Product } from '@/types';
import { useCallback, useEffect, useState } from 'react';

interface UseProductFilterProps {
  products: Product[];
}

const useProductFilter = ({ products }: UseProductFilterProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const search = useCallback(
    (query: string) => {
      setIsSearching(true);
      setTimeout(() => {
        const filtered = products.filter(
          (product: Product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredProducts(filtered);
        setIsSearching(false);
      }, 1000);
    },
    [products],
  );

  useEffect(() => {
    const debouncedSearch = debounce(search, 300);
    const timeoutId = setTimeout(() => debouncedSearch(searchQuery), 300);
    return () => clearTimeout(timeoutId);
  }, [search, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredProducts,
    isSearching,
  };
};

export default useProductFilter;
