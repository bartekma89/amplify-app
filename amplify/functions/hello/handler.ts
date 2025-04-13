import type { Schema } from "../../data/resource";
import { env } from "$amplify/env/hello";

type handlerType = Schema["hello"]["functionHandler"];

export const handler: handlerType = async (event) => {
  const { name } = event.arguments;

  return `My name is ${name}, region: ${env.AWS_REGION}, table name: ${env.TABLE_NAME}`;
};
