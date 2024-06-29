import { Text, View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/components";

const ButtonMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    rounded: {
      type: "boolean",
      defaultValue: false,
    },
    variant: {
      defaultValue: "contained",
      description: "The variant of the button",
      control: { type: "radio" },
      options: ["contained", "outlined", "text"],
    },
    color: {
      defaultValue: "primary",
      description: "The color of the button",
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
  },
  args: {
    variant: "contained",
    rounded: false,
    color: "primary",
    children: "This is a button",
    containerStyles: {
      height: 50,
      maxWidth: 500,
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          paddingHorizontal: 12,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const ButtonWithStartAdornment: StoryObj<typeof Button> = {
  args: {
    ...ButtonMeta.args,
    variant: "contained",
    startAdornment: <Text>🚀</Text>,
  },
};
export const ButtonWithEndAdornment: StoryObj<typeof Button> = {
  args: {
    ...ButtonMeta.args,
    variant: "contained",
    endAdornment: <Text>🚀</Text>,
    typographyStyles: {
      paddingLeft: 12,
    },
  },
};

export const ButtonDefault: StoryObj<typeof Button> = {
  args: {
    variant: "contained",
  },
};

export default ButtonMeta;
