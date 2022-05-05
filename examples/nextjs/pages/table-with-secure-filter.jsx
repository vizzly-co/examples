import * as VizzLib from "@vizzly/components";

export default () => (
  <VizzLib.Table
    componentId="cmp_1e60e61badfe44d9a159dcfb32153fb7"
    host="http://0.0.0.0:5000"
    authEndpoint="/api/sign-my-filters"
    fields={["Price", "Region"]}
    filters={[]}
  />
);
