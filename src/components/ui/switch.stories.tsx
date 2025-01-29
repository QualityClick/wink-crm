import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      description: "Whether the switch is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    checked: {
      control: { type: "boolean" },
      description: "Whether the switch is checked.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the switch.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A switch component for toggling between checked and unchecked states.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => <Switch {...args} />,
};

export const Checked: Story = {
  render: (args) => <Switch {...args} checked />,
};

export const Disabled: Story = {
  render: (args) => <Switch {...args} disabled />,
};

export const CheckedDisabled: Story = {
  render: (args) => <Switch {...args} checked disabled />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
};
