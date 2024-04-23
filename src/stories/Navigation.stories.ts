import Navigation from "@/components/Navigation";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {},
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LogoutUserNav: Story = {};

export const LoginUserNav: Story = {};

export const NavigationComponent: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: "로그인" });
    const signupButton = canvas.getByRole("button", { name: "회원가입" });

    await expect(loginButton).toBeInTheDocument();
    await expect(signupButton).toBeInTheDocument();

    await userEvent.click(loginButton);

    const logoutButton = canvas.getByRole("button", { name: "로그아웃" });
    await expect(logoutButton).toBeInTheDocument();

    await userEvent.click(logoutButton);
    const updatedLoggedInButton = canvas.getByRole("button", {
      name: "로그인",
    });
    await expect(updatedLoggedInButton).toBeInTheDocument();
  },
};
