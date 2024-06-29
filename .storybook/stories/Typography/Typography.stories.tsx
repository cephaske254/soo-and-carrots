import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import { Typography as TypographyComponent } from "src/components";
import { typography, getColorKeys } from "src/theme";

const COLOR_OPTIONS = getColorKeys();

const TypographyMeta: Meta<typeof TypographyComponent> = {
  title: "Typography",
  component: TypographyComponent,

  args: {
    color: "grey.800",
    variant: "body2",
    children: "Hello there!",
  },

  argTypes: {
    variant: {
      options: Object.keys(typography),
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
      options: COLOR_OPTIONS,
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

export const Title1: StoryObj<typeof TypographyComponent> = {
  args: {
    ...TypographyMeta.args,
    variant: "title1",
  },
};

export default TypographyMeta;
