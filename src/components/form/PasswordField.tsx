import { useCallback, useMemo, useState } from "react";
import { TextField, TextFieldProps } from "./TextField";
import { EyeIcon, EyeOffIcon } from "src/icons";
import { IconButton } from "../IconButton";
import { GREY } from "src/theme";

const BUTTON_SIZE = 32;
const ICON_SIZE = 0.8 * BUTTON_SIZE;

const ICON_PROPS = {
  strokeWidth: 1,
  color: GREY[900],
  height: ICON_SIZE,
  width: ICON_SIZE,
};

export const PasswordField: React.FC<PasswordFieldProps> = ({
  defaultVisible,
  ...props
}) => {
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
        <IconButton
          onPress={toggleVisible}
          size={BUTTON_SIZE}
          variant="outline"
        >
          {endAdornment}
        </IconButton>
      }
      textContentType="password"
      secureTextEntry={!visible}
    />
  );
};

export type PasswordFieldProps = TextFieldProps & {
  defaultVisible?: boolean;
};
