import type { Meta, StoryObj } from "@storybook/react";

import { FieldSearch } from "./index";

const meta: Meta<typeof FieldSearch> = {
  component: FieldSearch,
  tags: ["autodocs"],
  title: "Components/Molecules/Forms/Fields/FieldSearch",
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FieldSearch>;

export const Primary: Story = {
  args: {
    placeholder: "Cari data...",
  },
};
