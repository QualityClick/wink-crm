import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { ComponentProps } from "react";

type CheckboxProps = ComponentProps<typeof Checkbox>;

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Whether the checkbox is checked.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the checkbox.",
    },
    id: {
      control: { type: "text" },
      description: "ID to associate with the checkbox for accessibility.",
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      action: "clicked",
      description:
        "Callback function triggered when the checkbox state changes.",
      table: {
        type: {
          summary: "(event: React.ChangeEvent<HTMLInputElement>) => void",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A customizable checkbox component that allows toggling between checked and unchecked states.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => <Checkbox {...args} />,
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => <Checkbox {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Checkbox {...args} />,
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => <Checkbox {...args} />,
};

export const WithLabel: Story = {
  args: {
    id: "terms",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};
