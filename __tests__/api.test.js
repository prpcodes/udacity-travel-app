import { formHandler } from "../src/client/js/formHandler";

describe('Test: "handleSubmit" should ebe a function', () => {
  it("should be a function", async () => {
    expect(typeof formHandler).toBe("function");
  });
});
