import { defineFunction } from "@aws-amplify/backend";

export const hello = defineFunction({
  entry: "./handler.ts",
  name: "hello",
  description: "A simple hello world function",
  runtime: "nodejs20.x",
//   memory: 1024,
//   timeout: 30,
//   environment: {
//     NODE_ENV: "production",
//   },
  bundling: {
    minify: false
  }
});
