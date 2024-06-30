import { memo, useEffect, useState } from "react";

import * as Font from "expo-font";
import Constants from "expo-constants";

import { getFontsRequire } from "fonts";
import * as SplashScreen from "expo-splash-screen";

const isExpo = Constants.appOwnership === "expo";

if (isExpo) {
  SplashScreen.preventAutoHideAsync().catch((e) => {});
}

export const FontsLoader = memo<
  React.PropsWithChildren<{
    callback?: () => void;
  }>
>(function FontsLoader({ children, callback }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    // Load fonts here
    await Font.loadAsync(getFontsRequire());
    setFontsLoaded(true);
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (isExpo) {
      loadFonts();
    }
  }, []);

  if (!fontsLoaded) return null;

  return children;
});
