import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import { Competition } from "src/types/competition";

export type RootStackParamList = {
  onboarding: undefined;
  register: {
    competition?: Competition;
  };

  Home: NavigatorScreenParams<HomeStackParamList>;
  select_competition: {
    active_competition?: string | null;
  };
};

export type HomeStackParamList = {
  home?: {
    register_success?: boolean;
  };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, T>,
    StackScreenProps<RootStackParamList, "Home">
  >;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    StackScreenProps<RootStackParamList, T>,
    HomeStackScreenProps<keyof HomeStackParamList>
  >;
