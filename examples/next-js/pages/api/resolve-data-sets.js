import { runQuery } from "@vizzly/components";

const dataSet = require("./dataSet.json");

export default async function handler(req, res) {
  //

  res.status(200).json([dataSet]);
}
