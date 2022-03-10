import middy from "@middy/core";
import { APIGatewayProxyEvent } from "aws-lambda";

export const postProcessor = () => {
  const after: middy.MiddlewareFn<APIGatewayProxyEvent, any> = async (
    request
  ): Promise<void> => {
    console.time("query");
    // Your middleware logic
    if (
      request.response === null ||
      [null, undefined].includes(request.response.body)
    ) {
      return;
    }

    const salutations = (request.response.body.data as string[]).map(
      (name) => `Hello ${name}!`
    );

    console.timeEnd("query");
    request.response.body = JSON.stringify({
      ...request.response.body,
      data: salutations,
    });
  };

  return {
    after,
  };
};
