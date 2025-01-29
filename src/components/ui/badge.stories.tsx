import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline"],
      description: "The variant of the badge.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the badge.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A badge component that can be used to highlight information.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    variant: "outline",
  },
};

export const CustomContent: Story = {
  render: (args) => (
    <Badge {...args}>
      <span className="text-sm">Custom Content</span>
    </Badge>
  ),
  args: {
    variant: "default",
  },
};

export const InCard: Story = {
  render: (args) => (
    <div className="border p-4 rounded-lg">
      <h3 className="text-lg font-bold">Card Title</h3>
      <p className="text-sm">This is a card with a badge.</p>
      <Badge {...args}>New</Badge>
    </div>
  ),
};
