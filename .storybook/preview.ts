import type { Preview } from "@storybook/react";
import { HttpResponse, http } from "msw";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/app/globals.css";
initialize({ onUnhandledRequest: "warn" });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/posts/1", () => {
          return HttpResponse.json({
            title: "MSW Title",
            body: "MSW Content",
          });
        }),
      ],
    },
  },

  loaders: [mswLoader],
};

export default preview;
