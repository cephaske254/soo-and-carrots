import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Checkbox as CheckboxComponent } from "src/components";
import { spacing } from "src/theme";

const CheckboxMeta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  title: "Inputs/Checkbox",
  args: {
    label:
      "By signing up, I agree to Cloit's Terms & Conditions and Privacy Policy.",
    checked: false,
  },
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: spacing.md,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const CheckboxDefault: StoryObj<typeof CheckboxMeta> = {
  args: CheckboxMeta.args,
};

export const CheckboxChecked: StoryObj<typeof CheckboxMeta> = {
  args: {
    ...CheckboxMeta.args,
    checked: true,
  },
};

export default CheckboxMeta;
