import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'Home', params: undefined }] });
    }, 2100);
  }, [navigation]);
  return (
    <View className='flex-1 items-center justify-center bg-[#90ee90]'>
      <Text className='text-6xl font-bold text-green-700'>Products</Text>
    </View>
  );
};

export default Splash;
