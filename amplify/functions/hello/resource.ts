import { defineFunction } from "@aws-amplify/backend";

export const hello = defineFunction({
  entry: "./handler.ts",
  name: "hello",
  bundling: {
    minify: false
  }
});
