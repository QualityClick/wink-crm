import { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";
import { Button } from "@/components/ui/button";

const meta: Meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["start", "center", "end"],
      description: "Alignment of the HoverCard content",
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: "center" },
      },
    },
    sideOffset: {
      control: { type: "number" },
      description: "Offset distance from the trigger",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A HoverCard component that displays additional information when hovering over an element.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This is a simple hover card example.</p>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const CustomAlign: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover for Custom Alignment</Button>
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <p className="text-sm">Aligned to start.</p>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithImage: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover for Profile</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Software Engineer</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
