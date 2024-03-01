import ScreensNavigator from '@/navigation/routes';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
export default function App() {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <ScreensNavigator />
    </NavigationContainer>
  );
}
