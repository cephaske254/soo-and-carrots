const FONTS = [
  "./src/assets/fonts/PlusJakartaSans-Light.ttf",
  "./src/assets/fonts/PlusJakartaSans-Regular.ttf",
  "./src/assets/fonts/PlusJakartaSans-Medium.ttf",
  "./src/assets/fonts/PlusJakartaSans-SemiBold.ttf",
  "./src/assets/fonts/PlusJakartaSans-Bold.ttf",
  "./src/assets/fonts/PlusJakartaSans-ExtraBold.ttf",
];

const getFontsRequire = () => ({
  "PlusJakartaSans-Light": require("./src/assets/fonts/PlusJakartaSans-Light.ttf"),
  "PlusJakartaSans-Regular": require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
  "PlusJakartaSans-Medium": require("./src/assets/fonts/PlusJakartaSans-Medium.ttf"),
  "PlusJakartaSans-SemiBold": require("./src/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  "PlusJakartaSans-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
  "PlusJakartaSans-ExtraBold": require("./src/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
});

module.exports = { FONTS, getFontsRequire };
