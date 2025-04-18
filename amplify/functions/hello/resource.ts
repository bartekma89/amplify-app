import { defineFunction } from "@aws-amplify/backend";

export const hello = defineFunction({
  name: "hello",
  entry: "./handler.ts",
  bundling: {
    minify: false,
  },
  environment: {
    TABLE_NAME: "products",
  },
});
