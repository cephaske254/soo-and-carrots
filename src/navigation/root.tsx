import OnboardingScreen from "src/screens/onboarding";
import RegisterScreen, { RegisterScreenHeader } from "src/screens/register";

import { HomeNavigator } from "./home";
import type { RootStackParamList } from "./types";
import {
  DefaultTheme,
  Theme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
  dark: false,
};

const RootStackNavigation = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootStackNavigation.Navigator
        initialRouteName="onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStackNavigation.Screen
          name="onboarding"
          component={OnboardingScreen}
        />
        <RootStackNavigation.Screen
          name="register"
          component={RegisterScreen}
          options={{
            headerShown: true,
            header(props) {
              return <RegisterScreenHeader {...props} />;
            },
          }}
        />
        <RootStackNavigation.Screen name="Home" component={HomeNavigator} />
      </RootStackNavigation.Navigator>
    </NavigationContainer>
  );
};