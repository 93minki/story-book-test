import Home from "@/app/page";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/Home",
  component: Home,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeComponent: Story = {};
