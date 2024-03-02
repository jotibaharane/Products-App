import ScreensNavigator from '@/navigation/routes';
import { NavigationContainer } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <ScreensNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
