import { runQuery } from "@vizzly/components";

const data = require("./database.json");
const dataSet = require("./dataSet.json");

export default async function handler(req, res) {
  // TODO any custom authorisation & authentication
  // ...

  // TODO your custom conversion of vizzly queries
  // into results. For this example, we'll use the
  // same query engine used for Vizzly `in-browser`.
  // However you might transform the Vizzly queries
  // into SQL to run against your database, or into
  // API calls to another service to run the query.

  const { queries } = JSON.parse(req.body);

  const results = queries.map(query => {
    if(query.dataSetId == dataSet.id) {
      return runQuery(dataSet, data, query)
    } else {
      console.error(`Query required data set which does not exist. ${query.dataSetId}, ${dataSet.id}`)
      // The client is requesting to query a data set
      // that does not exist. Therefore return null to
      // show something has gone wrong, and there's no result.
      return null;
    };
  });

  res.status(200).json(results);
};
