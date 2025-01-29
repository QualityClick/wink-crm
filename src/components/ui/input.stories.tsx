import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Search } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
      description: "Specifies the input type",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text inside the input",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the input field",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A flexible input component with customizable styles.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
  },
  render: (args) => <Input {...args} />,
};

export const WithPlaceholder: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text...",
  },
  render: (args) => <Input {...args} />,
};

export const Disabled: Story = {
  args: {
    type: "text",
    disabled: true,
    placeholder: "This input is disabled",
  },
  render: (args) => <Input {...args} />,
};

export const WithIcon: Story = {
  render: () => (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input className="pl-10" type="text" placeholder="Search..." />
    </div>
  ),
};
