import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Función para renderizar los ítems del Accordion
const renderAccordionItems = () => (
  <>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
  </>
);

export const Default: Story = {
  render: (args) => <Accordion {...args}>{renderAccordionItems()}</Accordion>,
  args: {
    type: "single",
    collapsible: true,
  },
};

export const Multiple: Story = {
  render: (args) => <Accordion {...args}>{renderAccordionItems()}</Accordion>,
  args: {
    type: "multiple",
  },
};

export const Collapsible: Story = {
  render: (args) => <Accordion {...args}>{renderAccordionItems()}</Accordion>,
  args: {
    type: "single",
    collapsible: true,
  },
};
