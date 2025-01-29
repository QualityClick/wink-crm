import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "object" },
      description: "The default value of the slider.",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "[50]" },
      },
    },
    min: {
      control: { type: "number" },
      description: "Minimum value for the slider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      control: { type: "number" },
      description: "Maximum value for the slider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    step: {
      control: { type: "number" },
      description: "Step interval for the slider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the slider input.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A slider component for selecting a value within a range.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => <Slider {...args} />,
};

export const MinMaxRange: Story = {
  args: {
    defaultValue: [30],
    min: 10,
    max: 90,
    step: 5,
  },
  render: (args) => <Slider {...args} />,
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
  render: (args) => <Slider {...args} />,
};

export const SmallSteps: Story = {
  args: {
    defaultValue: [40],
    min: 0,
    max: 100,
    step: 0.5,
  },
  render: (args) => <Slider {...args} />,
};
