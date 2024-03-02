import { ProductsArray } from '@/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ProductCard from './ProductCard';
import SkeletonCard from './ProductCard/Skeleton';

interface ProductListProps {
  productArray: ProductsArray;
  isLoading: boolean;
}

export default function ProductListComponent({
  productArray,
  isLoading,
}: ProductListProps) {
  const navigation = useNavigation();
  return (
    <View className='space-y-2 bg-white'>
      {isLoading ? (
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={Array.from({ length: 15 }, (_, index) => index + 1)}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.toString()}
          renderItem={() => <SkeletonCard />}
        />
      ) : productArray.length > 0 ? (
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={productArray}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() => navigation.navigate('Product', { id: item?.id })}
            />
          )}
        />
      ) : (
        <View className='items-center p-5'>
          <Text>No products available</Text>
        </View>
      )}
    </View>
  );
}
