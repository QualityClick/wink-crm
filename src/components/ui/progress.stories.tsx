import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress"; // Asegúrate de que la ruta sea correcta

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
      description: "The progress value (0 to 100).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the progress bar.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A progress bar component for displaying progress.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 50, // Valor predeterminado para la historia
  },
};

export const Empty: Story = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 0, // Barra de progreso vacía
  },
};

export const Full: Story = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 100, // Barra de progreso completa
  },
};

export const CustomColor: Story = {
  render: (args) => (
    <Progress
      {...args}
      className="bg-red-100" // Fondo personalizado
    />
  ),
  args: {
    value: 75,
  },
};

export const CustomIndicatorColor: Story = {
  render: (args) => (
    <Progress
      {...args}
      className="bg-blue-100" // Fondo personalizado
    />
  ),
  args: {
    value: 25,
  },
};
