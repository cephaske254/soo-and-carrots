import get from "lodash.get";

export const GREY = {
  "50": "#F9FAFB",
  "100": "#f5f5f5",
  "200": "#eeeeee",
  "300": "#D0D5DD",
  "400": "#bdbdbd",
  "500": "#9e9e9e",
  "600": "#475467",
  "700": "#344054",
  "800": "#1D2939",
  "900": "#101828",
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
} as const;

export const SECONDARY = {
  main: GREY[800],
} as const;

export const BLUE = {
  100: "#D3D8FF",
  200: "#B8BFFF",
  500: "#4C53FF",
  600: PRIMARY.main,
  700: "#2030E2",
} as const;

export const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
} as const;

const palette = {
  primary: PRIMARY,
  secondary: SECONDARY,
  error: ERROR,
  grey: GREY,
  blue: BLUE,
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
