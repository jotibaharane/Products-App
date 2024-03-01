import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
interface ContainerProps {
  children: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <SafeAreaView className='pt-8 bg-white dark:bg-neutral-900'>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

export default Container;
