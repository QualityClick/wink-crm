import { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./toaster";
import { useToast } from "@/hooks/use-toast";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A toast notification system that displays messages dynamically.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => <ToasterStory />,
};

const ToasterStory = () => {
  const { toast } = useToast();

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() =>
          toast({
            title: "Success",
            description: "Your action was successful.",
          })
        }
      >
        Show Toast
      </button>
      <Toaster />
    </div>
  );
};
