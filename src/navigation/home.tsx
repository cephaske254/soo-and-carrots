import { HomeStackParamList } from "./types";
import HomeScreen from "../screens/Home/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="home">
      <HomeStackNavigator.Screen name="home" component={HomeScreen} />
    </HomeStackNavigator.Navigator>
  );
};
