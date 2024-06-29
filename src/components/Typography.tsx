import { useMemo } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useTheme } from "src/hooks";
import {
  type FontFamilies,
  type TypographyVariants,
  type PaleteColors,
  getColor,
} from "src/theme";

const getTypographyStyles = (theme: Theme, props: TypographyProps) => {
  const styles = Object.assign(
    {},
    theme.typography[props.variant ?? "body2"] ?? {}
  ) as TextStyle;

  if (props.fontFamily) {
    styles.fontFamily = theme.fonts[props.fontFamily];
  }

  if (props.color) {
    styles.color = getColor(props.color);
  }

  return styles;
};

const Typography: React.FC<TypographyProps> = (props) => {
  const theme = useTheme();

  const styles = useMemo(() => {
    return getTypographyStyles(theme, props);
  }, [props.variant, props.color, props.fontFamily, theme]);

  return <Text style={[styles, props.style]}>{props.children}</Text>;
};

export type TypographyProps = {
  children: React.ReactNode;
  variant?: TypographyVariants;

  fontFamily?: FontFamilies;
  color?: PaleteColors;

  style?: StyleProp<TextStyle>;
};

export { Typography };
