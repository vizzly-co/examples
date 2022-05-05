import * as VizzLib from "@vizzly/components";

export default () => (
  <VizzLib.LineChart
    componentId="cmp_1e60e61badfe44d9a159dcfb32153fb7"
    defaultLineStyle={{
      connectNulls: false,
      lineColour: "#77d198",
      showDots: false,
      strokeWidth: 5,
    }}
    dimension={{
      field: "Region",
      interval: null,
    }}
    fieldNaming={{}}
    filters={[]}
    groupBy={[
      {
        field: "Region",
      },
    ]}
    host="http://0.0.0.0:5000"
    lineStyles={{}}
    metrics={[
      {
        aggregate: "mean",
        field: "Price",
      },
    ]}
    sortBy={[]}
    authEndpoint="/api/sign-my-filters"
  />
);
