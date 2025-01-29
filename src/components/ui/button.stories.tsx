import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The variant of the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: { type: "boolean" },
      description: "Whether to render the button as a child element.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the button.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A button component with multiple variants and sizes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  render: (args) => <Button {...args}>Delete</Button>,
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  render: (args) => <Button {...args}>Outline</Button>,
  args: {
    variant: "outline",
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Secondary</Button>,
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  render: (args) => <Button {...args}>Ghost</Button>,
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  render: (args) => <Button {...args}>Link</Button>,
  args: {
    variant: "link",
  },
};

export const Small: Story = {
  render: (args) => <Button {...args}>Small Button</Button>,
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  render: (args) => <Button {...args}>Large Button</Button>,
  args: {
    size: "lg",
  },
};

export const IconButton: Story = {
  render: (args) => (
    <Button {...args}>
      <ArrowRight />
    </Button>
  ),
  args: {
    size: "icon",
  },
};

export const AsChild: Story = {
  render: (args) => (
    <Button {...args} asChild>
      <a href="#">Link as Button</a>
    </Button>
  ),
  args: {
    variant: "default",
    asChild: true,
  },
};

export const Disabled: Story = {
  render: (args) => <Button {...args}>Disabled Button</Button>,
  args: {
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <ArrowRight className="mr-2" />
      Continue
    </Button>
  ),
  args: {
    variant: "default",
  },
};

export const CombinedStates: Story = {
  render: (args) => <Button {...args}>Combined State</Button>,
  args: {
    variant: "destructive",
    size: "lg",
    className: "uppercase",
  },
};
