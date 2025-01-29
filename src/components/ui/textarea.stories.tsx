import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the textarea.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the textarea input.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling.",
    },
    rows: {
      control: { type: "number", min: 1, max: 10 },
      description: "Number of rows (height of the textarea).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A customizable textarea component with optional configurations.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
    rows: 3,
  },
  render: (args) => <Textarea {...args} />,
};

export const Disabled: Story = {
  args: {
    placeholder: "This is disabled",
    disabled: true,
  },
  render: (args) => <Textarea {...args} />,
};

export const Large: Story = {
  args: {
    placeholder: "Large textarea",
    rows: 6,
  },
  render: (args) => <Textarea {...args} />,
};

export const Small: Story = {
  args: {
    placeholder: "Small textarea",
    rows: 2,
  },
  render: (args) => <Textarea {...args} />,
};

export const CustomStyles: Story = {
  args: {
    placeholder: "Custom styled textarea",
    className: "border border-red-500 text-red-700 bg-red-100",
  },
  render: (args) => <Textarea {...args} />,
};
