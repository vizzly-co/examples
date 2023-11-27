import supertest from "supertest";
import { createSigner } from "@vizzly/auth";
import * as Settings from "../src/Settings";

const signDataAccessToken = async (): Promise<string> => {
  const signer = createSigner({
    ttlInMinutes: 1,
    privateKey: Settings.getVizzlyPrivateKey(),
  });

  return await signer.signDataAccessToken({
    projectId: "prj_c4e2ddd2f8784217969f340b2c27eff8",
    dataSetIds: "*",
    secureFilters: {},
  });
};

describe("Proxy", () => {
  test("status endpoint - API", async () => {
    const { app } = require("../src/index.ts");

    const response = await supertest(app)
      .post("/api/status")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({});

    expect(response.status).toEqual(200);
    expect(response.headers).toHaveProperty("response-time");
    expect(response.headers).toHaveProperty("vizzly-query-engine-request-id");
    expect(response.headers["vizzly-query-engine-strategy"]).toEqual("dynamic");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("application/json"),
    );

    expect(response.body).toEqual({
      allowGetStarted: null,
      client: "postgres",
      configFound: true,
      configSources: {
        connection: "environment",
        dataSets: [],
        saveLocations: ["file", "vizzlyEncrypted"],
      },
      configValid: true,
      connectionOk: true,
      dataSetsCount: 1,
      message: "Ready to accept queries",
      projectId: 'prj_c4e2ddd2f8784217969f340b2c27eff8',
      version: expect.any(String),
    });
  });

  describe("resolve data sets", () => {
    test("for user 1", async () => {
      const { app } = require("../src/index.ts");

      const response = await supertest(app)
        .post("/api/v1/resolve-data-sets")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .set("Cookie", "user=1")
        .set("Auth", await signDataAccessToken())
        .send({});

      expect(response.status).toEqual(200);
      expect(response.headers).toHaveProperty("response-time");
      expect(response.headers).toHaveProperty("vizzly-query-engine-request-id");
      expect(response.headers["vizzly-query-engine-strategy"]).toEqual(
        "dynamic",
      );
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("application/json"),
      );

      expect(response.body).toEqual({
        dataSets: [
          {
            id: "das_dynamic",
            name: "A dynamic data set for user 1!",
            fields: [
              {
                id: "fie_1",
                publicName: "Home Country",
                dataType: "string",
                allowedGranularities: expect.any(Array),
                allowedOperators: expect.any(Array),
              },
              {
                id: "fie_2 - SQL field example",
                publicName: "Product brand",
                dataType: "string",
                allowedGranularities: expect.any(Array),
                allowedOperators: expect.any(Array),
              },
            ],
          },
        ],
      });
    });

    test("for user 2", async () => {
      const { app } = require("../src/index.ts");

      const response = await supertest(app)
        .post("/api/v1/resolve-data-sets")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .set("Cookie", "user=2")
        .set("Auth", await signDataAccessToken())
        .send({});

      expect(response.status).toEqual(200);
      expect(response.headers).toHaveProperty("response-time");
      expect(response.headers).toHaveProperty("vizzly-query-engine-request-id");
      expect(response.headers["vizzly-query-engine-strategy"]).toEqual(
        "dynamic",
      );
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("application/json"),
      );

      expect(response.body).toEqual({
        dataSets: [
          {
            id: "das_dynamic",
            name: "A dynamic data set for user 2!",
            fields: [
              {
                id: "fie_1",
                publicName: "Home Country",
                dataType: "string",
                allowedGranularities: expect.any(Array),
                allowedOperators: expect.any(Array),
              },
              {
                id: "fie_2",
                publicName: "Price in $",
                dataType: "number",
                allowedGranularities: expect.any(Array),
                allowedOperators: expect.any(Array),
              },
              {
                id: "fie_3 - SQL field example",
                publicName: "Product brand",
                dataType: "string",
                allowedGranularities: expect.any(Array),
                allowedOperators: expect.any(Array),
              },
            ],
          },
        ],
      });
    });
  });
});
