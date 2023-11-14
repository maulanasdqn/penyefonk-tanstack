import type { Meta, StoryObj } from "@storybook/react";

import { InputText } from "./index";

const meta: Meta<typeof InputText> = {
  component: InputText,
  tags: ["autodocs"],
  title: "Components/Atoms/Forms/Input/Text",
  argTypes: {
    required: {
      control: { type: "boolean" },
    },

    disabled: {
      control: { type: "boolean" },
    },
    name: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Primary: Story = {
  args: {
    size: "sm",
    required: false,
    name: "nama",
    disabled: false,
    placeholder: "Masukkan Nama Anda",
  },
};
