import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectSeparator,
  SelectValue,
} from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "select" },
      options: ["option1", "option2", "option3"],
      description: "The default selected value.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the select input.",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A select component with customizable styles and options.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    defaultValue: "option1",
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithPlaceholder: Story = {
  args: {
    defaultValue: "",
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Choose an option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const CustomStyles: Story = {
  args: {
    defaultValue: "option2",
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="border-2 border-blue-500 text-blue-700">
        <SelectValue placeholder="Custom Styled Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Choose an option</SelectLabel>
          <SelectSeparator />
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
