import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ICON_BUTTON_COLOR_OPTIONS,
  ICON_BUTTON_SIZE,
  ICON_BUTTON_VARIANT_OPTIONS,
  IconButton as IconButtonComponent,
} from "src/components";
import { ArrowLeft } from "src/icons";

const MyButtonMeta: Meta<typeof IconButtonComponent> = {
  title: "IconButton",
  component: IconButtonComponent,

  argTypes: {
    color: {
      defaultValue: "default",
      description: "The color of the button",
      control: { type: "radio" },
      options: ICON_BUTTON_COLOR_OPTIONS,
    },
    variant: {
      defaultValue: "contained",
      description: "The variant of the button",
      control: { type: "radio" },
      options: ICON_BUTTON_VARIANT_OPTIONS,
    },
    size: {
      defaultValue: ICON_BUTTON_SIZE,
      description: "The size of the button",
      control: { type: "number" },
    },
  },

  args: {
    color: ICON_BUTTON_COLOR_OPTIONS[0],
    variant: ICON_BUTTON_VARIANT_OPTIONS[0],
    size: ICON_BUTTON_SIZE,
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

export const IconButton: StoryObj<typeof IconButtonComponent> = {
  args: {
    ...MyButtonMeta.args,
    children: <ArrowLeft />,
  },
};

export default MyButtonMeta;
