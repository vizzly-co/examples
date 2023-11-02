import express, { Express } from "express";
import * as ConfigBuilder from "./ConfigBuilder";
import * as DynamicDatabaseConnectionBuilder from "./DynamicDatabaseConnectionBuilder";
import * as ProxyHelpers from "./ProxyHelpers";
import * as Settings from "./Settings";
import fetch from "isomorphic-fetch";

import cookieParser from "cookie-parser";

const app: Express = express();
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

app.all("/*", async (req, res) => {
  const baseUrl = Settings.getQueryEngineBaseUrl();
  const url = `${baseUrl}${req.path}`;
  let proxiedBody = req.body;

  let proxiedHeaders: { [key: string]: string } =
    ProxyHelpers.requestHeadersToMap(req);

  // Add the query engine API key header to authenticate the request
  proxiedHeaders["Config-Api-Key"] = Settings.getQueryEngineApiKey();

  // OPTIONAL for dynamic DB connections!
  // If you are dynamically changing which database to connect to, you can set the Db-Connection
  // header with an encrypted JSON string containing the connection credentials. Alternatively, you
  // can setup the connection on the Query Engine using environment variables.
  proxiedHeaders["Db-Connection"] =
    await DynamicDatabaseConnectionBuilder.buildConnection();

  // Build the config dynamically depending on the user.
  const dynamicConfig = ConfigBuilder.buildConfigForUser(req.cookies["user"]);

  // Add the `dynamicConfig` property to the body, for POST requests and where content-type is application/json.
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

  // Add all response headers to the response...
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  // Pass the response from the query engine back to the user.
  return res.status(response.status).send(await response.text());
});

module.exports = { app };
