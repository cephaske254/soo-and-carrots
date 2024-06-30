import { cloneElement, useMemo } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import {
  DEFAULT_TEXT_COLOR,
  GREY,
  LIGHT,
  PRIMARY,
  SECONDARY,
} from "src/theme/palette";

const colors = {
  default: {
    backgroundColor: LIGHT,
    color: DEFAULT_TEXT_COLOR,
  },
  primary: {
    backgroundColor: PRIMARY.main,
    color: LIGHT,
  },
  secondary: {
    backgroundColor: SECONDARY.main,
    color: LIGHT,
  },
} as const;

export const ICON_BUTTON_COLOR_OPTIONS = Object.keys(
  colors
) as (keyof typeof colors)[];

export const ICON_BUTTON_VARIANT_OPTIONS = ["contained", "outline"] as const;
export const ICON_BUTTON_SIZE = 52;

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  style,
  variant = "contained",
  ...props
}) => {
  const { color, containerStyles } = useMemo(() => {
    if (!props.color) props.color = "default";

    let { color, backgroundColor } =
      colors[props.color ?? "default"] ?? colors.default;

    let styles: ViewStyle = {
      backgroundColor,
    };

    if (variant === "outline") {
      styles = {
        ...styles,
        borderWidth: 1,
        borderColor: props.color === "default" ? GREY["300"] : backgroundColor,
        backgroundColor: "transparent",
      };
    }

    if (props.size) {
      styles = {
        ...styles,
        height: props.size,
        width: props.size,
        borderRadius: props.size / 2,
      };
    }

    return {
      containerStyles: styles,
      color,
      backgroundColor,
      ...(variant === "outline" &&
        color !== colors.default.color && { color: backgroundColor }),
    };
  }, [props.color, props.size, variant]);

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, containerStyles, style]}
      activeOpacity={0.8}
    >
      {cloneElement(children, {
        color: children.props.color ?? color,
      })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ICON_BUTTON_SIZE,
    width: ICON_BUTTON_SIZE,

    backgroundColor: "#F9FAFB",
    borderRadius: ICON_BUTTON_SIZE / 2,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

// --------------------------------
type IconButtonProps = {
  children: React.ReactElement;
  style?: View["props"]["style"];
  color?: keyof typeof colors;
  variant?: (typeof ICON_BUTTON_VARIANT_OPTIONS)[number];
  size?: number;
} & TouchableOpacityProps;
