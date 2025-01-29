import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "The default active tab.",
      table: {
        type: { summary: "string" },
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
        component: "A customizable tabs component with selectable panels.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultValue: "tab1",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  args: {
    defaultValue: "settings",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="home">🏠 Home</TabsTrigger>
        <TabsTrigger value="settings">⚙️ Settings</TabsTrigger>
        <TabsTrigger value="profile">👤 Profile</TabsTrigger>
      </TabsList>
      <TabsContent value="home">Welcome Home</TabsContent>
      <TabsContent value="settings">Adjust your settings here</TabsContent>
      <TabsContent value="profile">View your profile information</TabsContent>
    </Tabs>
  ),
};

export const Bordered: Story = {
  args: {
    defaultValue: "tab1",
    className: "border border-gray-300 rounded-md p-2",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList className="border-b">
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">General Overview Content</TabsContent>
      <TabsContent value="tab2">Detailed Information</TabsContent>
      <TabsContent value="tab3">Customer Reviews</TabsContent>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  args: {
    defaultValue: "tab1",
    className: "w-full",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList className="w-full">
        <TabsTrigger className="flex-1 text-center" value="tab1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger className="flex-1 text-center" value="tab2">
          Tab 2
        </TabsTrigger>
        <TabsTrigger className="flex-1 text-center" value="tab3">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};
