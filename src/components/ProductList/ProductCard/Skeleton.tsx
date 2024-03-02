import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const SkeletonCard = () => {
  return (
    <TouchableOpacity className='mb-4 mx-4 space-y-1'>
      <View className='flex-row justify-start w-full shadow-sm'>
        <View className='items-start justify-start w-1/5'>
          <View className='rounded-lg w-20 h-28 bg-gray-200 animate-pulse' />
        </View>
        <View className='w-4/5 pl-8 justify-start items-start'>
          <View className='h-4 w-24 bg-gray-200 mb-2 animate-pulse' />
          <View className='h-4 w-48 bg-gray-200 mb-2 animate-pulse' />
          <View className='h-4 w-48 bg-gray-200 mb-2 animate-pulse' />
          <View className='flex flex-row gap-2 items-center'>
            <View className='h-4 w-24 bg-gray-200 animate-pulse' />
            <View className='h-4 w-16 bg-gray-200 animate-pulse' />
            <View className='h-4 w-16 bg-gray-200 animate-pulse' />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SkeletonCard;
