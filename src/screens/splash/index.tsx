import { RootNavigatorParamList } from '@/navigation/type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
type Props = NativeStackScreenProps<RootNavigatorParamList, 'Splash'>;
const Splash = ({ navigation }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2100);
  }, []);
  return (
    <View className='flex-1 items-center justify-center bg-[#90ee90]'>
      <Animatable.Text
        duration={2000}
        animation='zoomIn'
        className='text-6xl font-bold text-green-700'
      >
        Products
      </Animatable.Text>
    </View>
  );
};

export default Splash;
