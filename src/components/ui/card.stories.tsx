import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the card.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A card component for displaying content in a structured way.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithCustomClassNames: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader className="bg-blue-100">
        <CardTitle className="text-blue-800">Custom Header</CardTitle>
        <CardDescription className="text-blue-600">
          Custom Description
        </CardDescription>
      </CardHeader>
      <CardContent className="bg-blue-50">
        <p className="text-blue-800">Custom Content</p>
      </CardContent>
      <CardFooter className="bg-blue-100">
        <p className="text-blue-800">Custom Footer</p>
      </CardFooter>
    </Card>
  ),
  args: {
    className: "border-blue-200",
  },
};

export const WithoutFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
    </Card>
  ),
};

export const MinimalCard: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p>This is a minimal card with only content.</p>
      </CardContent>
    </Card>
  ),
};
