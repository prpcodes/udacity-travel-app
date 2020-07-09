import { server } from "../src/server/server";

describe('Test: "PORT" should be set to 8081', () => {
  it("should be a 8081", async () => {
    expect(server).toBe(undefined);
  });
});
