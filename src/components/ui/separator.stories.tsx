import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Defines the separator orientation.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "horizontal" },
      },
    },
    decorative: {
      control: { type: "boolean" },
      description: "If true, the separator is for decoration only.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A separator component used to visually divide content.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => <Separator {...args} />,
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    className: "h-16",
  },
  render: (args) => <Separator {...args} />,
};

export const CustomStyles: Story = {
  args: {
    orientation: "horizontal",
    className: "bg-red-500 h-2",
  },
  render: (args) => <Separator {...args} />,
};
