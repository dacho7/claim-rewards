import { getAllRewards } from "../../../src/controllers/rewardController";

describe("Reward controller", () => {
  test("The data return will be object", async () => {
    const data = await getAllRewards();
    expect(typeof data).toBe("object");
  });
  test("Date should not be undefined", async () => {
    const data = await getAllRewards();
    expect(data).not.toBeUndefined();
  });
});
