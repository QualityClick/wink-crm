import { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
} from "./chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const meta: Meta<typeof ChartContainer> = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the chart.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A chart component for displaying data visualizations.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChartContainer>;

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

export const Default: Story = {
  render: (args) => (
    <ChartContainer {...args} config={{ uv: { color: "#8884d8" } }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend content={<ChartLegendContent />} />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  ),
};

export const MultipleLines: Story = {
  render: (args) => (
    <ChartContainer
      {...args}
      config={{
        uv: { color: "#8884d8" },
        pv: { color: "#82ca9d" },
      }}
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend content={<ChartLegendContent />} />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  ),
};

export const CustomTooltip: Story = {
  render: (args) => (
    <ChartContainer
      {...args}
      config={{
        uv: { color: "#8884d8", label: "Unique Visitors" },
        pv: { color: "#82ca9d", label: "Page Views" },
      }}
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            content={<ChartTooltipContent indicator="line" hideLabel />}
          />
          <Legend content={<ChartLegendContent />} />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  ),
};

export const CustomLegend: Story = {
  render: (args) => (
    <ChartContainer
      {...args}
      config={{
        uv: { color: "#8884d8", label: "Unique Visitors" },
        pv: { color: "#82ca9d", label: "Page Views" },
      }}
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend
            content={<ChartLegendContent hideIcon verticalAlign="top" />}
          />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  ),
};
