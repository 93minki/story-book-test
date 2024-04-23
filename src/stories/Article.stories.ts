import Article from "@/components/Article";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Article",
  component: Article,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    title: "",
    content: "",
    id: 0,
  },
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleComponent: Story = {
  args: {
    title: "Article Test1",
    content: "skladjaksldjsoidjsaiodsakldsajklsaj;kdlsakljdsa",
  },
};
