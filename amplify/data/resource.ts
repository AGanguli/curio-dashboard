import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { hello } from "../functions/hello/resource";

const schema = a.schema({
  hello: a.query().arguments({
    name: a.string(),
  }).returns(a.string())
  .handler(a.handler.function(hello))
  .authorization((allow) => [allow.guest()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
