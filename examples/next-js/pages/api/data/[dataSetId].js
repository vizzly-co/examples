// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = require("./data.json");
const database = require("../database.json");

export default function handler(req, res) {
  // TODO pick out the data that's only
  // accessible for the current user.

  // In this example, we'll just return
  // some static data.

  res.status(200).json(database);
}
