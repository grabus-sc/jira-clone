import { userMock1, userMock2 } from "@domain/user";
import { Comment } from "./comment";

const createdAt = Date.now();
const updatedAt = Date.now();

export const commentMock1: Comment = {
  id: "92149ee5-0459-4286-8323-1542e1295154",
  user: userMock1,
  message: "Ok, I'm on it",
  createdAt,
  updatedAt,
};

export const commentMock2: Comment = {
  id: "3375b7ea-425d-4bd3-a728-c8888b63a7f2",
  user: userMock2,
  message: "This should be implemented ASAP",
  createdAt,
  updatedAt,
};

export const commentMock3: Comment = {
  id: "ee000718-85e5-44ac-91e2-e29340fb0b61",
  user: userMock2,
  message:
    "Adipisicing irure non voluptate id magna enim minim labore. Lorem deserunt velit sit ea ullamco laborum laboris culpa laborum. Minim cillum et dolore ipsum occaecat commodo. Sint esse sit consequat aute velit duis. Id et proident aute velit consectetur Lorem velit aliqua id. Duis sit proident veniam qui aliquip aute aliquip ad do. Duis deserunt veniam ipsum quis cupidatat voluptate dolor ullamco nisi duis occaecat ex non ad.",
  createdAt,
  updatedAt,
};