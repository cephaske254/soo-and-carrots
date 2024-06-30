import { FontsLoader } from "src/components/FontsLoader";

import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "src/contexts";
import { RootNavigator } from "src/navigation";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <FontsLoader callback={SplashScreen.hideAsync}>
          <RootNavigator />
        </FontsLoader>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
