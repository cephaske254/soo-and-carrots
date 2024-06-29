import { Button } from "src/components";
import { FontsLoader } from "src/components/FontsLoader";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "src/contexts";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <FontsLoader callback={SplashScreen.hideAsync}>
          <SafeAreaView>
            <Button rounded variant="contained">
              Sign up for free
            </Button>
          </SafeAreaView>
        </FontsLoader>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
