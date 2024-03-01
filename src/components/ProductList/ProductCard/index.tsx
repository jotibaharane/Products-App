import { Product } from '@/types';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
interface ProductCardProps {
  item: Product;
  onPress: () => void; // Define onPress event handler
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <TouchableOpacity
      className='mb-4 mx-4 space-y-1'
      key={item?.id}
      onPress={() => ''}
    >
      <View className='flex-row justify-start w-[100%]shadow-sm'>
        {/* Image */}
        <View className='items-start justify-start w-[20%]'>
          <Image
            source={{
              uri:
                item?.thumbnail ||
                'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
            resizeMode='cover'
            className='rounded-lg w-20 h-20'
          />
        </View>

        {/* Content */}

        <View className='w-[70%] pl-4 justify-center space-y-1'>
          {/* Author */}
          <Text className='text-xs font-bold text-gray-900 dark:text-neutral-300'>
            {item?.brand}
          </Text>

          {/* Title */}
          <Text className='text-neutral-800 capitalize max-w-[90%] dark:text-white '>
            {item?.title}
          </Text>

          {/* Date */}

          <Text className='text-xs text-gray-700 dark:text-neutral-300'>
            {item?.description}
          </Text>
          <Text className='text-xs text-gray-700 dark:text-neutral-300'>
            {'\u20B9'} {item?.price}
          </Text>
        </View>

        {/* Bookmark */}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
