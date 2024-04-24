import Navigation from "@/components/Navigation";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    loginState: false,
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationComponent: Story = {
  args: {
    loginState: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: "로그인" });
    const signupButton = canvas.getByRole("button", { name: "회원가입" });
    await step("Navigation 컴포넌트 렌더링", async () => {
      await expect(loginButton).toBeInTheDocument();
      await expect(signupButton).toBeInTheDocument();
    });

    await step("Login 버튼 클릭", async () => {
      await userEvent.click(loginButton);
    });

    await step("Logout 버튼 클릭", async () => {
      const logoutButton = canvas.getByRole("button", { name: "로그아웃" });
      await expect(logoutButton).toBeInTheDocument();

      await userEvent.click(logoutButton);
      await waitFor(async () => {
        const updatedLoggedInButton = canvas.getByRole("button", {
          name: "로그인",
        });
        await expect(updatedLoggedInButton).toBeInTheDocument();
      });
    });
  },
};

export const LogoutUserNav: Story = {
  args: {
    loginState: false,
  },
};

LogoutUserNav.parameters = {
  a11y: {
    disable: true,
  },
};

export const LoginUserNav: Story = {
  args: {
    loginState: true,
  },
};
