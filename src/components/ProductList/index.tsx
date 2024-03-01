import { ProductsArray } from '@/types';
import React from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from './ProductCard';

interface ProductListProps {
  productArray: ProductsArray;
}

export default function ProductListComponent({
  productArray,
}: ProductListProps) {
  return (
    <View className='space-y-2 bg-white dark:bg-neutral-900'>
      {/* Header */}
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={productArray}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => console.log('Product pressed')}
          />
        )}
      />
    </View>
  );
}
