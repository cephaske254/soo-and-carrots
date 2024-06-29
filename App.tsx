import { LogBox } from "react-native";
import Constants from "expo-constants";
import { FontsLoader } from "./src/components/FontsLoader";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "src/contexts";

SplashScreen.preventAutoHideAsync().catch((e) => {
  console.log(e);
});

let AppEntryPoint = null as unknown as React.FC;

if (Constants.expoConfig?.extra?.storybookEnabled === true) {
  const Component = require("./.storybook").default as React.FC;

  AppEntryPoint = (props) => {
    return (
      <ThemeProvider>
        <FontsLoader callback={SplashScreen.hideAsync}>
          <Component {...props} />
        </FontsLoader>
      </ThemeProvider>
    );
  };

  AppEntryPoint.displayName = "Storybook";

  LogBox.ignoreLogs(["Warning: TextType: Support for defaultProps"]);
} else {
  AppEntryPoint = require("./App.main").default as React.FC;
}

export default AppEntryPoint;
