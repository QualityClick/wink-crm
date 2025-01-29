import { Meta, StoryObj } from "@storybook/react";
import { InputWithIcon } from "./inputWithIcon";
import { Search, Mail, Lock } from "lucide-react";

const meta: Meta<typeof InputWithIcon> = {
  title: "Components/InputWithIcon",
  component: InputWithIcon,
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
        component: "An input field with a customizable leading icon.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputWithIcon>;

export const Default: Story = {
  args: {
    type: "text",
    icon: <Search className="h-5 w-5 text-gray-500" />,
  },
  render: (args) => <InputWithIcon {...args} />,
};

export const WithPlaceholder: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    icon: <Search className="h-5 w-5 text-gray-500" />,
  },
  render: (args) => <InputWithIcon {...args} />,
};

export const Disabled: Story = {
  args: {
    type: "text",
    disabled: true,
    placeholder: "Disabled input",
    icon: <Search className="h-5 w-5 text-gray-400" />,
  },
  render: (args) => <InputWithIcon {...args} />,
};

export const WithDifferentIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <InputWithIcon
        type="email"
        placeholder="Enter your email"
        icon={<Mail className="h-5 w-5 text-gray-500" />}
      />
      <InputWithIcon
        type="password"
        placeholder="Enter your password"
        icon={<Lock className="h-5 w-5 text-gray-500" />}
      />
    </div>
  ),
};
