import get from "lodash.get";

export const GREY = {
  "50": "#fafafa",
  "100": "#f5f5f5",
  "200": "#eeeeee",
  "300": "#e0e0e0",
  "400": "#bdbdbd",
  "500": "#9e9e9e",
  "600": "#757575",
  "700": "#616161",
  "800": "#424242",
  "900": "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
};

export const DEFAULT_GREY = GREY[500];
export const DEFAULT_TEXT_COLOR = GREY[900];

export const LIGHT = GREY[100];
export const DARK = GREY[800];

export const PRIMARY = {
  main: "#253BFF",
};

export const SECONDARY = {
  main: "#1D2939",
};

const palette = {
  primary: PRIMARY,
  secondary: SECONDARY,
  grey: GREY,

  common: {
    dark: DARK,
    light: LIGHT,
    white: "#ffffff",
    black: "#000000",
  },
} as const;

export type PaleteColors = ObjectDotNotation<typeof palette>;

const getColor = <T extends PaleteColors>(key: T): string => {
  return get(palette, key);
};

const flattenObject = <T extends Record<string, any>>(
  obj: T,
  prefix: string | null = null
): T => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key as keyof T];

    if (typeof value === "object") {
      const flat = flattenObject(value, key);
      acc = { ...acc, ...flat };
    } else if (prefix) {
      acc[`${prefix}.${key}`] = value;
    } else {
      acc[key] = value;
    }

    return acc;
  }, {} as Record<string, any>) as T;
};

const getColorKeys = <T extends PaleteColors>(): T[] => {
  return Object.keys(flattenObject(palette)) as T[];
};

export { palette, getColor, getColorKeys };
