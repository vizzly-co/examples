import express, { Express } from "express";
import * as Settings from "./Settings";
import * as ConfigBuilder from "./ConfigBuilder";
import fetch from "isomorphic-fetch";
import { Encryption } from "@vizzly/auth";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(cookieParser());

app.use(express.json({ limit: "50mb" }));

const encryptedDatabaseConnection = async (): Promise<string> => {
  return await Encryption.encrypt(Settings.getEncryptionSecret(), {
    host: Settings.getDatabaseHost(),
    password: Settings.getDatabasePassword(),
    user: Settings.getDatabaseUser(),
    database: Settings.getDatabaseName(),
  });
};

app.all("/*", async (req, res) => {
  const baseUrl = Settings.getQueryEngineBaseUrl();
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
  proxiedHeaders["Config-Api-Key"] = Settings.getQueryEngineApiKey();

  // If you are dynamically changing which database to connect too, you can set the Db-Connection
  // header with an encrypted JSON string containing the connection credentials. Alternatively, you
  // can setup the connection on the Query Engine using environment variables.
  proxiedHeaders["Db-Connection"] = await encryptedDatabaseConnection();

  const dynamicConfig = ConfigBuilder.buildConfigForUser(req.cookies["user"]);

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
