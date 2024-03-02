import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigatorParamList = {
  Home: undefined;
  Product: { id: number };
};

export type RootStackScreenProps<T extends keyof RootNavigatorParamList> =
  NativeStackScreenProps<RootNavigatorParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamList {}
  }
}
