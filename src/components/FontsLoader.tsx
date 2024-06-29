import { memo, useEffect, useState } from "react";

import * as Font from "expo-font";

import { getFontsRequire } from "fonts";

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
    callback?.();
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return children;
});
