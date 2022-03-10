import { postProcessor } from "./postProcessor";

describe("", () => {
  it("", async () => {
    const response = {
      body: {
        message: "foo",
      },
      data: ["foo", "bar", "foobar"],
    };
    const result = await postProcessor().after({
      context: {} as any,
      error: {} as any,
      event: {} as any,
      internal: {} as any,
      response,
    });

    console.log(response);

    expect(result).toEqual(undefined);
  });
});
