import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import { TextField as TextFieldComponent } from "src/components";
import { EmailIcon } from "src/icons";
import { GREY } from "src/theme";

const TextFieldMeta: Meta<typeof TextFieldComponent> = {
  component: TextFieldComponent,
  title: "Inputs/TextField",

  argTypes: {
    required: {
      type: "boolean",
      defaultValue: false,
    },
    error: {
      type: "boolean",
      defaultValue: false,
    },
    readOnly: {
      type: "boolean",
      defaultValue: false,
    },
    placeholder: {
      type: "string",
    },
  },
  args: {
    placeholder: "Type something...",
    error: false,
    readOnly: false,
    required: true,
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

export const Default: StoryObj<typeof TextFieldMeta> = {};

export const WithLabel: StoryObj<typeof TextFieldMeta> = {
  args: {
    ...TextFieldMeta.args,
    label: "Label",
  },
};

export const WithHelperText: StoryObj<typeof TextFieldMeta> = {
  args: {
    ...WithLabel.args,
    helperText: "Helper Text",
  },
};

export const WithError: StoryObj<typeof TextFieldMeta> = {
  args: {
    ...WithHelperText.args,
    error: true,
  },
};

export const ReadOnly: StoryObj<typeof TextFieldMeta> = {
  args: {
    ...TextFieldMeta.args,
    readOnly: true,
    helperText: "This input is readonly",
  },
};

export const WithStartAdornment: StoryObj<typeof TextFieldMeta> = {
  args: {
    ...TextFieldMeta.args,
    startAdornment: (
      <EmailIcon color={GREY["600"]} style={{ marginBottom: -4 }} />
    ),
    helperText: "This input has a start adornment!",
  },
};

export default TextFieldMeta;
