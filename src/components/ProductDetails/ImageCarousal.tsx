import { Product } from '@/types';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import {
  FlatList,
  Image,
  View,
  ViewToken,
  useWindowDimensions,
} from 'react-native';

const ImageCarousal: FC<{ data: Product | undefined }> = ({ data }) => {
  const windowWidth = useWindowDimensions().width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  };

  return (
    <>
      <FlatList
        horizontal
        data={data?.images}
        className='flex-1'
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            className={`w-full`}
            style={{ width: windowWidth }}
          />
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View className='flex-row justify-center mt-2'>
        {data?.images.map((_, index) => (
          <View
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={classNames(
              'w-2 h-2 rounded mx-1',
              index === currentIndex ? 'bg-[#39A6A3]' : 'bg-[#C4C4C4]',
            )}
          />
        ))}
      </View>
    </>
  );
};

export default ImageCarousal;
