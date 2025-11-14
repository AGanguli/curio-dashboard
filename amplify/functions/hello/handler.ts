import type { Schema } from "../../data/resource";

type handlerType = Schema["sayHello"]["functionHandler"];

export const handler: handlerType = async (event: any, context: any) => {
    const { name } = event.arguments;
    return `Hello, ${name}!`;
};
