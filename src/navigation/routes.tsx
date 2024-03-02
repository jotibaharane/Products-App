import ProductDetails from '@/screens/product-details';
import ProductList from '@/screens/product-list';
import Splash from '@/screens/splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigatorParamList } from './type';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const ScreensNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={ProductList}
      />
      <Stack.Screen
        options={{
          title: 'Product Details',
          headerShadowVisible: false,
        }}
        name='Product'
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};

export default ScreensNavigator;
