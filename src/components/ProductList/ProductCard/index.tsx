import { Product } from '@/types';
import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
interface ProductCardProps {
  item: Product;
  onPress: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      className='mb-4 mx-4 space-y-1'
      key={item?.id}
      onPress={onPress}
    >
      <View className='flex-row justify-start w-full shadow-sm'>
        <View className='items-start justify-start w-1/5'>
          <Image
            source={{
              uri: item?.thumbnail,
            }}
            resizeMode='cover'
            className='rounded-lg w-20 h-28'
          />
        </View>
        <View className='w-3/4 pl-8 justify-start items-start '>
          <Text className='text-xs font-bold text-gray-900 '>
            {item?.brand}
          </Text>
          <Text className='text-neutral-800 capitalize max-w-[90%] '>
            {item?.title}
          </Text>
          <Text className='text-xs text-gray-700'>{item?.description}</Text>
          <View className='flex flex-row gap-2 items-center'>
            <Text className='text-xs text-gray-700 font-bold '>
              {`${'\u20B9'}${item?.price}`}
            </Text>
            <Text className='text-xs text-green-600 '>
              {`${`\u2193`}${item?.discountPercentage}%`}
            </Text>
            <Text className='text-xs text-yellow-600 '>
              {`${`\u2605`}${item?.rating}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
