import { Product } from '@/types';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

const ProductInfo: FC<{ data: Product | undefined }> = ({ data }) => {
  return (
    <View className='p-5 flex-1'>
      <Text className='font-bold mb-2 text-2xl text-[#333333]'>
        {data?.title}
      </Text>

      <View className='flex-row items-center mb-2'>
        <Text className='font-bold text-xl text-[#39A6A3]'>
          {'\u20B9'}
          {data?.price}
        </Text>
        <Text className='ml-2 text-[#FF7F50]'>
          {data?.discountPercentage}% OFF
        </Text>
        <Text className=' text-blue-700 ml-2'>
          {`${`\u2605`}${data?.rating} `}ratings
        </Text>
      </View>
      <Text className='font-bold text-xs mb-1'>
        {data?.brand}
        {` - ${data?.category} `}
      </Text>
      <Text className='mb-2 text-[#666666]'>{data?.description}</Text>
    </View>
  );
};

export default ProductInfo;
