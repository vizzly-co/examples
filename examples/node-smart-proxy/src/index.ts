import express, { Express } from "express";
import * as Config from "./Config";
import fetch from "isomorphic-fetch";
import { Encryption } from "@vizzly/auth";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(cookieParser());

app.use(express.json({ limit: "50mb" }));

const getConfigForUser = (userId: string) => {
  if (userId == "1") {
    return {
      connection: {
        client: "postgres",
      },
      dataSets: [
        {
          id: "das_dynamic",
          name: "A dynamic data set for user 1!",
          fields: [
            {
              id: "fie_1",
              dataType: "TEXT",
              table: "shop_customers",
              name: "country",
              publicName: "Home Country",
            },
          ],
          joins: [],
        },
      ],
    };
  } else {
    return {
      connection: {
        client: "postgres",
      },
      dataSets: [
        {
          id: "das_dynamic",
          name: "A dynamic data set for user 2!",
          fields: [
            {
              id: "fie_1",
              dataType: "TEXT",
              table: "shop_customers",
              name: "country",
              publicName: "Home Country",
            },
            {
              id: "fie_2",
              dataType: "BIGINT",
              table: "shop_customers",
              name: "price",
              publicName: "Price in $",
            },
          ],
          joins: [],
        },
      ],
    };
  }
};

const encryptedDatabaseConnection = async (): Promise<string> => {
  return await Encryption.encrypt(Config.getEncryptionSecret(), {
    host: Config.getDatabaseHost(),
    password: Config.getDatabasePassword(),
    user: Config.getDatabaseUser(),
    database: Config.getDatabaseName(),
  });
};

app.all("/*", async (req, res) => {
  const baseUrl = Config.getQueryEngineBaseUrl();
  const url = `${baseUrl}${req.path}`;
  let proxiedBody = req.body;
  let proxiedHeaders: { [key: string]: string } = {};

  // Add all the headers from the request
  Object.entries(req.headers).forEach(([key, value]) => {
    if (key && value && typeof value == "string") {
      proxiedHeaders[key] = value;
    }
  });

  // Add the query engine API key
  proxiedHeaders["Config-Api-Key"] = Config.getQueryEngineApiKey();

  // If you are dynamically changing which database to connect too, you can set the Db-Connection
  // header with an encrypted JSON string containing the connection credentials. Alternatively, you
  // can setup the connection on the Query Engine using environment variables.
  proxiedHeaders["Db-Connection"] = await encryptedDatabaseConnection();

  const dynamicConfig = getConfigForUser(req.cookies["user"]);

  // Add the `dynamicConfig` property to the body, for POST requests and where content-type is application/json
  if (
    req.method == "POST" &&
    req.headers["content-type"]?.includes("application/json") &&
    proxiedBody
  ) {
    proxiedBody.dynamicConfig = dynamicConfig;
  }

  // Run the request against the query engine
  const response = await fetch(url, {
    method: req.method,
    body: req.method === "POST" ? JSON.stringify(proxiedBody) : undefined,
    headers: proxiedHeaders,
  });

  // Set all the response headers from the call
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  return res.status(response.status).send(await response.text());
});

module.exports = { app };
