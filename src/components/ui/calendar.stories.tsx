import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";
import { addDays } from "date-fns";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["default", "single", "range"],
      description: "The mode of the calendar.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Whether to show days outside the current month.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the calendar.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A calendar component that allows date selection.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (args) => <Calendar {...args} />,
  args: {
    showOutsideDays: true,
  },
};

export const SingleSelection: Story = {
  render: (args) => (
    <Calendar
      {...args}
      mode="single"
      selected={new Date()}
      onSelect={(day) => console.log(day)}
    />
  ),
  args: {
    showOutsideDays: true,
  },
};

export const RangeSelection: Story = {
  render: (args) => (
    <Calendar
      {...args}
      mode="range"
      selected={{ from: new Date(), to: addDays(new Date(), 7) }}
      onSelect={(range) => console.log(range)}
    />
  ),
  args: {
    showOutsideDays: true,
  },
};

export const WithoutOutsideDays: Story = {
  render: (args) => <Calendar {...args} />,
  args: {
    showOutsideDays: false,
  },
};

export const CustomClassNames: Story = {
  render: (args) => (
    <Calendar
      {...args}
      classNames={{
        day: "text-red-500",
        day_selected: "bg-red-500 text-white",
      }}
    />
  ),
  args: {
    showOutsideDays: true,
  },
};
