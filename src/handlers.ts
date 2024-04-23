import { http, HttpResponse } from "msw";

export const Handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts/1", ({ request }) => {
    return HttpResponse.json({
      title: "MSW Data",
      content: "MSW Content",
    });
  }),
];
