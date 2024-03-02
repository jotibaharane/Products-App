import Container from '@/components/Container';
import ProductListComponent from '@/components/ProductList';
import SearchComponent from '@/components/SearchComponent';
import useProductFilter from '@/hooks/useProductFilter';
import { getAllProducts } from '@/services';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useQuery } from 'react-query';

export default function ProductList() {
  const { data, isLoading } = useQuery('product_list', getAllProducts);
  const { searchQuery, setSearchQuery, filteredProducts, isSearching } =
    useProductFilter({
      products: data?.products || [],
    });

  return (
    <Container>
      <View className='pt-8'>
        <SearchComponent onChange={(text) => setSearchQuery(text)} />
      </View>

      <View className='flex-1'>
        <View className='mb-4 mx-4 flex-row justify-between items-center'>
          <Text className='text-xl'>Product List</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductListComponent
            productArray={searchQuery ? filteredProducts : data?.products || []}
            isLoading={isLoading || isSearching}
          />
        </ScrollView>
      </View>
    </Container>
  );
}
