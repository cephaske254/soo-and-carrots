import { StyleSheet } from "react-native";
import { Typography, TypographyProps } from "../Typography";
import { spacing } from "src/theme";
import { useMemo } from "react";

export const InputLabel = (props: InputLabelProps) => {
  const color = useMemo(() => {
    if (props.error) return "error.main";
    return props?.color || "grey.800";
  }, [props.error, props.color]);

  if (!props.children) return null;

  return (
    <Typography
      variant="body2"
      fontFamily="PlusJakartaSans-SemiBold"
      {...props}
      color={color}
      style={[
        styles.label,
        props.style,
        props.underlined && styles.underlinedLabel,
      ]}
    >
      {props.children}
      {!!props.required && "*"}
    </Typography>
  );
};

export type InputLabelProps = {
  error?: boolean;
  required?: boolean;
  children?: React.ReactNode;
  underlined?: boolean;
} & TypographyProps;

const styles = StyleSheet.create({
  label: {
    marginBottom: spacing["sm"],
  },
  underlinedLabel: {
    textDecorationLine: "underline",
  },
});
