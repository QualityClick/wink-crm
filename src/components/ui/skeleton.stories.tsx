import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to customize the skeleton.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A skeleton loading placeholder with configurable size and shape via CSS classes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "w-20 h-6",
  },
  render: (args) => <Skeleton {...args} />,
};

export const Circle: Story = {
  args: {
    className: "w-16 h-16 rounded-full",
  },
  render: (args) => <Skeleton {...args} />,
};

export const Square: Story = {
  args: {
    className: "w-16 h-16 rounded-none",
  },
  render: (args) => <Skeleton {...args} />,
};

export const Large: Story = {
  args: {
    className: "w-32 h-12",
  },
  render: (args) => <Skeleton {...args} />,
};

export const CustomColor: Story = {
  args: {
    className: "w-20 h-6 bg-red-100",
  },
  render: (args) => <Skeleton {...args} />,
};
