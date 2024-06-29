import { useMemo } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { capitalCase } from "change-case";
import { JAKARTA_SANS } from "src/theme/typography";
import { DEFAULT_TEXT_COLOR, PRIMARY, SECONDARY } from "src/theme/palette";

export const Button: React.FC<ButtonProps> = (props) => {
  const { typography, container } = useButtonStyles(props);
  return (
    <View style={[container]}>
      {props.startAdornment && props.startAdornment}

      <Text style={[typography]}>{props.children}</Text>

      {props.endAdornment && props.endAdornment}
    </View>
  );
};

// styles ---------------------------------

const styles = StyleSheet.create({
  //   typography
  typography: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: JAKARTA_SANS.semiBold,
  },

  //   container
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  containerRounded: {
    borderRadius: 50,
  },
  // contained variant
  contained: {},
  containedPrimary: {
    backgroundColor: PRIMARY.main,
  },
  containedSecondary: {
    backgroundColor: SECONDARY.main,
  },

  // outlined variant
  outlined: {
    borderWidth: 1,
    borderColor: DEFAULT_TEXT_COLOR,
  },
  typographyOutlined: {
    color: DEFAULT_TEXT_COLOR,
  },

  outlinedPrimary: {
    borderColor: PRIMARY.main,
  },
  typographyOutlinedPrimary: {
    color: PRIMARY.main,
  },

  outlinedSecondary: {
    borderColor: SECONDARY.main,
  },
  typographyOutlinedSecondary: {
    color: SECONDARY.main,
  },

  // text variant
  text: {},
  textPrimary: {},
  textSecondary: {},
});

// hooks -----------------------------------
const useButtonStyles = (props: ButtonProps) => {
  return useMemo<UseButtonStylesReturn>(() => {
    const container: UseButtonStylesReturn["container"] = [styles.container];
    const typography: UseButtonStylesReturn["typography"] = [styles.typography];

    switch (props?.variant) {
      case "outlined":
        container.push(styles.outlined);
        break;
      case "text":
        container.push(styles.text);
        break;

      default:
        container.push(styles.contained);
    }

    const key = `${props?.variant}${capitalCase(
      props?.color ?? "primary"
    )}` as keyof typeof styles;

    container.push(styles?.[key] as any);

    if (props?.variant === "outlined" || props?.variant === "text") {
      typography.push(styles.typographyOutlined);
      typography.push(
        styles?.[
          `typographyOutlined${capitalCase(
            props?.color ?? "primary"
          )}` as keyof typeof styles
        ] as any
      );
    }

    // ----------------- add defaults above -----------------

    if (props?.containerStyles) {
      container.push(props.containerStyles);
    }
    if (props?.rounded) {
      container.push(styles.containerRounded);
    }

    if (props?.typographyStyles) {
      typography.push(props.typographyStyles);
    }

    return {
      container,
      typography,
    };
  }, [props?.variant]);
};

// types -----------------------------------

export type ButtonProps = {
  containerStyles?: StyleProp<ViewStyle>;
  typographyStyles?: StyleProp<ViewStyle>;
  variant?: ButtonVariants;
  color?: ButtonColors;
  rounded?: boolean;

  children?: React.ReactNode;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
};

export type ButtonVariants = "contained" | "outlined" | "text";
export type ButtonColors = "primary" | "secondary";

export type UseButtonStylesReturn = {
  typography: StyleProp<any>;
  container: StyleProp<ViewStyle>;
};
