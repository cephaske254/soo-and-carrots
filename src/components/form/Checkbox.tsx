import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { Typography, TypographyProps } from "../Typography";
import { useMemo } from "react";
import { BLUE, GREY, spacing } from "src/theme";
import { CheckIcon } from "src/icons/Check";

const SIZE = 24 as const;
const ICON_SIZE = SIZE * 0.8;

const renderLabel = ({ label, labelStyles }: CheckboxProps) => {
  if (!label) return null;
  const type = typeof label;

  // @ts-ignore  - if type is string or is a react element
  if (type === "string" || !label?.props) {
    return (
      <Typography
        variant="body2"
        color="grey.600"
        style={[styles.label, labelStyles]}
      >
        {label}
      </Typography>
    );
  }

  // @ts-ignore
  if (label.props) {
    return label;
  }

  return null;
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const label = useMemo(() => {
    return renderLabel(props);
  }, [props.labelStyles, props.label]);

  const opacity = useMemo(() => {
    return props.checked ?? props.defaultChecked === true ? 1 : 0;
  }, [props.checked, props.defaultChecked]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...props}
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      <View style={styles.checkbox}>
        <CheckIcon
          height={ICON_SIZE}
          width={ICON_SIZE}
          color={GREY['500']}
          opacity={opacity}
        />
      </View>
      {label}
    </TouchableOpacity>
  );
};

export type CheckboxProps = {
  /** Pass in a string or rendered React Element */
  label?: React.ReactElement | string;
  labelStyles?: TypographyProps["style"];
  containerStyle?: StyleProp<ViewStyle>;

  onPress?: TouchableOpacityProps["onPress"];

  checked?: boolean;
  defaultChecked?: boolean;

  size?: number;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  checkbox: {
    height: SIZE,
    width: SIZE,
    marginRight: spacing.sm,

    borderWidth: 2,
    borderRadius: spacing.xs,
    borderColor: BLUE["100"],
  },

  label: {
    flexWrap: "wrap",
  },
});
