import { APIGatewayProxyResult } from "aws-lambda";

export type HandlerResponse<S> = Omit<APIGatewayProxyResult, "body"> & {
  body: S;
};
