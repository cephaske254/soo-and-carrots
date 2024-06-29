import { typography } from "./typography";
import { FONTS } from "./fonts";
import { palette } from "./palette";

const theme = {
  typography,
  palette,
  fonts: FONTS,
} as const;

type _Theme = typeof theme;

declare global {
  interface Theme extends _Theme {}
}

export * from "./typography";
export * from "./palette";
export * from "./fonts";
export * from "./spacing";

export { theme };
