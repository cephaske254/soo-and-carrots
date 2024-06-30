import "react-native-gesture-handler";

import { LogBox } from "react-native";
import Constants from "expo-constants";
import { FontsLoader } from "./src/components/FontsLoader";

import { ThemeProvider } from "src/contexts";

let AppEntryPoint = null as unknown as React.FC;

if (Constants.expoConfig?.extra?.storybookEnabled === true) {
  const Component = require("./.storybook").default as React.FC;

  AppEntryPoint = (props) => {
    return (
      <ThemeProvider>
        <FontsLoader>
          <Component {...props} />
        </FontsLoader>
      </ThemeProvider>
    );
  };

  AppEntryPoint.displayName = "Storybook";

  LogBox.ignoreLogs(["Warning: TextType: Support for defaultProps"]);

  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
} else {
  AppEntryPoint = require("./App.main").default as React.FC;
}

export default AppEntryPoint;
