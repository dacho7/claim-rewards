import { getAllRewards } from "../../../src/controllers/rewardController";

describe("reward controller", () => {
  test("the data return will be object", async () => {
    const data = await getAllRewards();
    expect(typeof data).toBe("object");
  });
  test("date should not be undefined", async () => {
    const data = await getAllRewards();
    expect(data).not.toBeUndefined();
  });
});
