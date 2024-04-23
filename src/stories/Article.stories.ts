import Article from "@/components/Article";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/Article",
  component: Article,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/1",
        query: {},  
      },
    },
  },
  args: {
    title: "",
    content: "",
    id: 1,
  },
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleComponent: Story = {
  args: {
    title: "Article Test1",
    content: "skladjaksldjsoidjsaiodsakldsajklsaj;kdlsakljdsa",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const article = canvas.getByTestId("article");
    
    await expect(article).toBeInTheDocument();
    await userEvent.click(article);
  },
};
