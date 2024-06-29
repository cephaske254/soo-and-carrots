import type { Meta, StoryObj } from "@storybook/react";
import { PasswordField as PasswordFieldComponent } from "src/components";
import TextFieldMeta from "./TextField.stories";

const PasswordFieldMeta: Meta<typeof PasswordFieldComponent> = {
  ...TextFieldMeta,
  title: "Inputs/PasswordField",
  component: PasswordFieldComponent,
  args: {
    ...TextFieldMeta.args,
    placeholder: "Enter password...",
    defaultVisible: false,
  },
};

export const PasswordField: StoryObj<typeof PasswordFieldMeta> = {};

export const PasswordFieldVisible: StoryObj<typeof PasswordFieldMeta> = {
  args: {
    ...PasswordFieldMeta.args,
    defaultVisible: true,
  },
};

export default PasswordFieldMeta;
