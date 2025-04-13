import { defineFunction } from "@aws-amplify/backend";

export const preSignUp = defineFunction({
  name: "preSignUp",
  entry: "./handler.ts",
  bundling: {
    minify: false,
  },
});
