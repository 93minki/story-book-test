import ArticleDetail from "@/components/ArticleDetail";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/ArticleDetail",
  component: ArticleDetail,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    id: "1",
  },
} satisfies Meta<typeof ArticleDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleDetailComponent: Story = {
  args: {
    id: "1",
  },
};
