import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const SearchComponent = () => {
  return (
    <View className='mx-4 mb-5 flex-row p-2 py-3 mt-8 justify-between items-center bg-neutral-200 rounded-full'>
      <TouchableOpacity className='pl-2'>
        <MagnifyingGlassIcon size='25' color='gray' />
      </TouchableOpacity>
      <TextInput
        onPressIn={() => ''}
        placeholder='Search for news'
        placeholderTextColor={'gray'}
        className='pl-4 flex-1 font-medium text-black tracking-wider'
      />
    </View>
  );
};

export default SearchComponent;
