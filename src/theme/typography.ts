import { TextStyle } from "react-native";

export const JAKARTA_SANS = {
  light: "PlusJakartaSans-Light",
  regular: "PlusJakartaSans-Regular",
  medium: "PlusJakartaSans-Medium",
  semiBold: "PlusJakartaSans-SemiBold",
  bold: "PlusJakartaSans-Bold",
} as const;

/** Use this function to build text styles */
const textStyle = <T extends TextStyle>(data: T) => {
  if (
    data.fontSize &&
    (data.lineHeight === null || data.lineHeight === undefined)
  ) {
    data.lineHeight = data.fontSize * 1.5;
  }

  return data;
};

const typography = {
  title1: textStyle({
    fontFamily: JAKARTA_SANS.bold,
    fontSize: 32,
  }),
  title2: textStyle({
    fontFamily: JAKARTA_SANS.bold,
    fontSize: 24,
  }),
  title3: textStyle({
    fontFamily: JAKARTA_SANS.bold,
    fontSize: 20,
  }),
  title4: textStyle({
    fontFamily: JAKARTA_SANS.bold,
    fontSize: 16,
  }),
  title5: textStyle({
    fontFamily: JAKARTA_SANS.bold,
    fontSize: 14,
  }),
  title6: textStyle({
    fontFamily: JAKARTA_SANS.bold,
    fontSize: 12,
  }),
  subtitle1: textStyle({
    fontFamily: JAKARTA_SANS.regular,
    fontSize: 16,
  }),
  subtitle2: textStyle({
    fontFamily: JAKARTA_SANS.regular,
    fontSize: 14,
  }),
  body1: textStyle({
    fontFamily: JAKARTA_SANS.regular,
    fontSize: 16,
  }),
  body2: textStyle({
    fontFamily: JAKARTA_SANS.regular,
    fontSize: 14,
  }),
  button: textStyle({
    fontFamily: JAKARTA_SANS.medium,
    fontSize: 14,
  }),
  caption: textStyle({
    fontFamily: JAKARTA_SANS.regular,
    fontSize: 12,
  }),
  overline: textStyle({
    fontFamily: JAKARTA_SANS.regular,
    fontSize: 10,
  }),
} as const;

export type TypographyVariants = keyof typeof typography;

export type TypographyVariant<T extends TypographyVariants> =
  (typeof typography)[T];

export { typography, textStyle };
