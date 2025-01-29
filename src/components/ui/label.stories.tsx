import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Input } from "@/components/ui/input";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    htmlFor: {
      control: { type: "text" },
      description: "Associates the label with an input field",
      table: {
        type: { summary: "string" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Custom class for styling",
    },
    children: {
      control: { type: "text" },
      description: "The text inside the label",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A customizable label component for form elements.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
  render: (args) => <Label {...args} />,
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" type="text" placeholder="Enter your username" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="email">Email (Disabled)</Label>
      <Input id="email" type="email" placeholder="Enter your email" disabled />
    </div>
  ),
};

export const CustomClass: Story = {
  args: {
    children: "Custom Styled Label",
    className: "text-red-500 text-lg",
  },
  render: (args) => <Label {...args} />,
};
