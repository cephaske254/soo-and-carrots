import { TextStyle } from "react-native";
import { FONTS } from "./fonts";

/** Use this function to build text styles */
const textStyle = <T extends TextStyle>(data: T) => {
  if (
    data.fontSize &&
    (data.lineHeight === null || data.lineHeight === undefined)
  ) {
    data.lineHeight = data.fontSize * 1.2;
  }

  return data;
};

const typography = {
  header: textStyle({
    fontFamily: FONTS["PlusJakartaSans-ExtraBold"],
    fontSize: 34,
  }),
  title1: textStyle({
    fontFamily: FONTS["PlusJakartaSans-ExtraBold"],
    fontSize: 32,
  }),
  title2: textStyle({
    fontFamily: FONTS["PlusJakartaSans-ExtraBold"],
    fontSize: 24,
  }),
  title3: textStyle({
    fontFamily: FONTS["PlusJakartaSans-ExtraBold"],
    fontSize: 20,
  }),
  title4: textStyle({
    fontFamily: FONTS["PlusJakartaSans-ExtraBold"],
    fontSize: 16,
  }),
  title5: textStyle({
    fontFamily: FONTS["PlusJakartaSans-ExtraBold"],
    fontSize: 14,
  }),
  title6: textStyle({
    fontFamily: FONTS["PlusJakartaSans-ExtraBold"],
    fontSize: 12,
  }),
  subtitle1: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Medium"],
    fontSize: 16,
  }),
  subtitle2: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Medium"],
    fontSize: 14,
  }),
  body1: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Regular"],
    fontSize: 16,
  }),
  body2: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Regular"],
    fontSize: 14,
    lineHeight: 21,
  }),
  body3: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Regular"],
    fontSize: 13,
  }),
  button: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Bold"],
    fontSize: 14,
    lineHeight: 16,
  }),
  caption: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Regular"],
    fontSize: 12,
  }),
  overline: textStyle({
    fontFamily: FONTS["PlusJakartaSans-Regular"],
    fontSize: 10,
  }),
} as const;

export type TypographyVariants = keyof typeof typography;

export type TypographyVariant<T extends TypographyVariants> =
  (typeof typography)[T];

export { typography, textStyle };
