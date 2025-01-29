import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the radio group.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the radio group is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A radio group component for selecting one option from a set.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option1" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};

export const CustomClassNames: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option1" className="space-y-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option1"
          id="option1"
          className="border-red-500"
        />
        <label htmlFor="option1" className="text-red-500">
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option2"
          id="option2"
          className="border-blue-500"
        />
        <label htmlFor="option2" className="text-blue-500">
          Option 2
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option3"
          id="option3"
          className="border-green-500"
        />
        <label htmlFor="option3" className="text-green-500">
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
};
