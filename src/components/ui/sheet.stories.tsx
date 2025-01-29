import { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetClose,
} from "./sheet";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof SheetContent> = {
  title: "Components/Sheet",
  component: SheetContent,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      description: "Defines the position of the sheet.",
      table: {
        type: { summary: '"top" | "bottom" | "left" | "right"' },
        defaultValue: { summary: "right" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A sheet component that slides in from different sides of the screen.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SheetContent>;

export const Default: Story = {
  args: {
    side: "right",
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is a sheet component.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  args: {
    side: "left",
  },
  render: Default.render,
};

export const Bottom: Story = {
  args: {
    side: "bottom",
  },
  render: Default.render,
};

export const CustomStyles: Story = {
  args: {
    side: "right",
    className: "bg-blue-100 text-blue-900",
  },
  render: Default.render,
};
