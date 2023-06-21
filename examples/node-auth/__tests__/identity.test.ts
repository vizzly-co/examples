import { getIdentityTokens } from "../src/identity";

describe("getIdentityTokens", () => {
  test("generates dashboard and data access tokens", async () => {
    const actual = await getIdentityTokens();

    expect(actual).toHaveProperty("dataAccessToken");
    expect(actual).toHaveProperty("dashboardAccessToken");
    expect(actual).toHaveProperty("queryEngineAccessToken");
  });
});