import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
interface SearchComponentProps {
  onChange: (text: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onChange }) => {
  return (
    <View className='mx-4 mb-2 flex-row p-2 py-3  justify-between items-center bg-neutral-100 rounded-full'>
      <TouchableOpacity className='pl-2'>
        <MagnifyingGlassIcon size='25' color='gray' />
      </TouchableOpacity>
      <TextInput
        onChangeText={onChange}
        placeholder='Search for product'
        placeholderTextColor={'gray'}
        className='pl-4 flex-1 font-medium text-black tracking-wider'
      />
    </View>
  );
};

export default SearchComponent;
