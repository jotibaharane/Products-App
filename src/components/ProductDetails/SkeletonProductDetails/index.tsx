import Container from '@/components/Container';
import classNames from 'classnames';
import React from 'react';
import { FlatList, View, useWindowDimensions } from 'react-native';

const SkeletonProductDetails = () => {
  const windowWidth = useWindowDimensions().width;
  const placeholderImages = Array(5).fill(null);
  const placeholderDots = placeholderImages.map((_, index) => (
    <View
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      className={classNames(
        'w-2 h-2 rounded mx-1',
        index === 0 ? 'bg-teal-500' : 'bg-gray-400',
      )}
    />
  ));

  return (
    <Container>
      <FlatList
        horizontal
        data={placeholderImages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <View
            className='w-full h-full flex-1 bg-gray-400 mb-10'
            style={{
              width: windowWidth,
            }}
          />
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View className='flex-row justify-center mt-10'>{placeholderDots}</View>
      <View className='p-5 flex-1'>
        <View className='w-full h-6 bg-gray-400 mb-2' />
        <View className='flex-row items-center mb-2'>
          <View className='w-16 h-4 bg-gray-400 mr-2' />
          <View className='w-16 h-4 bg-gray-400 mr-2' />
          <View className='w-16 h-4 bg-gray-400' />
        </View>
        <View className='w-full h-3 bg-gray-400 mb-1' />
        <View className='w-full h-3 bg-gray-400' />
      </View>
    </Container>
  );
};

export default SkeletonProductDetails;
