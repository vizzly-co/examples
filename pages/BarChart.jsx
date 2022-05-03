import * as VizzlyLib from "@vizzly/components";

export default () => (
  <div style={{width: "700px"}}>
  <VizzlyLib.BarChart
    displayTitle="Example bar chart"
    displaySubject="Whiskey data"
    host="http://0.0.0.0:5000"
    barStyles={{}}
    componentId="cmp_35a32fc9d3cc4d749727bcef2c584056"
    defaultBarStyle={{
      barColour: '#79D1D2',
      decimalPlaces: 0
    }}
    dimension={{
      field: 'Region',
      interval: null
    }}
    fieldNaming={{}}
    filters={[
      {
        field: 'Price',
        operator: '>',
        value: '3000'
      }
    ]}
    groupBy={[
      {
        field: 'Region'
      }
    ]}
    metrics={[
      {
        aggregate: 'mean',
        field: 'Price'
      }
    ]}
    sortBy={[
      {
        direction: 'asc',
        field: 'Region'
      }
    ]}
  />
  </div>
);
