import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigatorParamList = {
  Home: undefined;
  Product: { id: number };
  Splash: undefined;
};

export type RootStackScreenProps<T extends keyof RootNavigatorParamList> =
  NativeStackScreenProps<RootNavigatorParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamList {}
  }
}
