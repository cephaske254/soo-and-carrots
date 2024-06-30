import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import { HelperText } from "./HelperText";
import { FONTS, GREY, spacing, typography } from "src/theme";
import { InputLabel } from "./InputLabel";
import { forwardRef } from "react";

export type TextFieldVariants = "contained" | "outlined";

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  function TextField(
    {
      error,
      helperText,
      placeholder,
      required,
      variant,
      startAdornment,
      endAdornment,
      style,
      containerStyle,
      innerContainerStyle,
      label,
      fullWidth = true,
      hideErrors,
      ...props
    },
    ref
  ) {
    return (
      <View
        style={[
          styles.container,
          fullWidth && styles.containerFullWidth,
          containerStyle,
        ]}
      >
        <InputLabel required={required}>{label}</InputLabel>
        <View
          style={[
            styles.innerContainer,
            props.readOnly && styles.innerContainerReadOnly,
            innerContainerStyle,
          ]}
        >
          {startAdornment}

          <TextInput
            placeholder={placeholder}
            style={[styles.input, style]}
            cursorColor={GREY["800"]}
            placeholderTextColor={GREY["500"]}
            ref={ref}
            {...props}
          />

          {endAdornment}
        </View>

        <HelperText error={error} style={styles.label}>
          {hideErrors && !!error ? null : helperText}
        </HelperText>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {},
  containerFullWidth: {
    width: "100%",
  },

  innerContainer: {
    backgroundColor: GREY[50],
    borderRadius: spacing.sm + 2,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
  },
  innerContainerReadOnly: {
    backgroundColor: GREY[100],
  },
  input: {
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.sm,
    flex: 1,
    color: GREY[800],
    fontFamily: FONTS["PlusJakartaSans-Regular"],
    fontSize: typography.body3.fontSize,
  },

  label: {
    paddingLeft: spacing.xs,
  },
});

export type TextFieldProps = {
  placeholder?: string;
  label?: string;

  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;

  variant?: TextFieldVariants;

  hideErrors?: boolean;

  helperText?: string;
  error?: boolean;

  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;

  innerContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export type TextFieldRef = TextInput;
