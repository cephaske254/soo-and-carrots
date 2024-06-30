import { forwardRef, useCallback, useMemo, useState } from "react";
import { TextField, TextFieldProps, TextFieldRef } from "./TextField";
import { EyeIcon, EyeOffIcon } from "src/icons";
import { IconButton } from "../IconButton";
import { GREY } from "src/theme";
import { StyleSheet, TouchableOpacity } from "react-native";

const BUTTON_SIZE = 35;
const ICON_SIZE = 0.6 * BUTTON_SIZE;

const ICON_PROPS = {
  strokeWidth: 1,
  color: GREY[900],
  height: ICON_SIZE,
  width: ICON_SIZE,
};

export const PasswordField = forwardRef<TextFieldRef, PasswordFieldProps>(
  function PasswordField({ defaultVisible, ...props }, ref) {
    const [visible, setVisible] = useState(!!defaultVisible ?? false);

    const endAdornment = useMemo(() => {
      if (visible) return <EyeOffIcon {...ICON_PROPS} />;
      return <EyeIcon {...ICON_PROPS} />;
    }, [visible]);

    const toggleVisible = useCallback(() => {
      setVisible((state) => !state);
    }, []);

    return (
      <TextField
        {...props}
        endAdornment={
          <TouchableOpacity
            onPress={toggleVisible}
            style={styles.endAdornment}
            activeOpacity={0.8}
          >
            {endAdornment}
          </TouchableOpacity>
        }
        textContentType="password"
        secureTextEntry={!visible}
        keyboardType={visible ? "visible-password" : "default"}
        ref={ref}
      />
    );
  }
);

const styles = StyleSheet.create({
  endAdornment: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
});

export type PasswordFieldProps = TextFieldProps & {
  defaultVisible?: boolean;
};
