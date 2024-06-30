/** @type {import("@expo/config-types").ExpoConfig} */
const config = {
  name: "soo-and-carrots",
  slug: "soo-and-carrots",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  plugins: [
    [
      "expo-font",
      {
        fonts: [
          "./src/assets/fonts/PlusJakartaSans-Light.ttf",
          "./src/assets/fonts/PlusJakartaSans-Regular.ttf",
          "./src/assets/fonts/PlusJakartaSans-Medium.ttf",
          "./src/assets/fonts/PlusJakartaSans-SemiBold.ttf",
          "./src/assets/fonts/PlusJakartaSans-Bold.ttf",
        ],
      },
    ],
    [
      "expo-asset",

      {
        assets: [
          "./src/assets/videos/bg.mp4",
          "./src/assets/videos/bg.thumbnail.png",
        ],
      },
    ],
  ],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./src/assets/favicon.png",
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED === "true",
  },
};

export default config;
