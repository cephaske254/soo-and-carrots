import { StyleSheet } from "react-native";
import { Typography, TypographyProps } from "../Typography";
import { spacing } from "src/theme";

export const HelperText: React.FC<HelperTextProps> = (props) => {
  if (!props.children) return null;

  return (
    <Typography
      variant="body3"
      fontFamily="PlusJakartaSans-Regular"
      color={props.error ? "error.main" : "grey.700"}
      {...props}
      style={[styles.helperText, props.style]}
    >
      {props.children}
    </Typography>
  );
};

const styles = StyleSheet.create({
  helperText: {
    marginTop: spacing.xs,
  },
});

export type HelperTextProps = {
  error?: boolean;
} & TypographyProps;
