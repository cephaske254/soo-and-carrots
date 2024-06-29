const FONTS = {
  "PlusJakartaSans-Light": "PlusJakartaSans-Light",
  "PlusJakartaSans-Regular": "PlusJakartaSans-Regular",
  "PlusJakartaSans-Medium": "PlusJakartaSans-Medium",
  "PlusJakartaSans-SemiBold": "PlusJakartaSans-SemiBold",
  "PlusJakartaSans-Bold": "PlusJakartaSans-Bold",
  "PlusJakartaSans-ExtraBold": "PlusJakartaSans-ExtraBold",

} as const;

type FontFamilies = keyof typeof FONTS;
export { FONTS, FontFamilies };
