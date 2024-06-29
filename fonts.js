const FONTS = [
  "./src/assets/fonts/PlusJakartaSans-Light.ttf",
  "./src/assets/fonts/PlusJakartaSans-Regular.ttf",
  "./src/assets/fonts/PlusJakartaSans-Medium.ttf",
  "./src/assets/fonts/PlusJakartaSans-SemiBold.ttf",
  "./src/assets/fonts/PlusJakartaSans-Bold.ttf",
];

const FONT_NAMES = {
  "PlusJakartaSans-Light": "PlusJakartaSans-Light",
  "PlusJakartaSans-Regular": "PlusJakartaSans-Regular",
  "PlusJakartaSans-Medium": "PlusJakartaSans-Medium",
  "PlusJakartaSans-SemiBold": "PlusJakartaSans-SemiBold",
  "PlusJakartaSans-Bold": "PlusJakartaSans-Bold",
};

const getFontsRequire = () => ({
  "PlusJakartaSans-Light": require("./src/assets/fonts/PlusJakartaSans-Light.ttf"),
  "PlusJakartaSans-Regular": require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
  "PlusJakartaSans-Medium": require("./src/assets/fonts/PlusJakartaSans-Medium.ttf"),
  "PlusJakartaSans-SemiBold": require("./src/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  "PlusJakartaSans-Bold": require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
});

module.exports = { FONTS, FONT_NAMES, getFontsRequire };
