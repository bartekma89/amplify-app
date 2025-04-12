import type { Schema } from "../../data/resource";

type handlerType = Schema["hello"]["functionHandler"];

export const handler: handlerType = async (event) => {
  const { name } = event.arguments;

  return `My name is ${name}`;
};
