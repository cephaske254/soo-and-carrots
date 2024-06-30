import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  onboarding: undefined;
  register: undefined;

  Home: NavigatorScreenParams<HomeStackParamList>;
};

export type HomeStackParamList = {
  home: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    StackScreenProps<RootStackParamList, "Home">,
    StackScreenProps<HomeStackParamList, T>
  >;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    StackScreenProps<RootStackParamList, T>,
    HomeStackScreenProps<keyof HomeStackParamList>
  >;
