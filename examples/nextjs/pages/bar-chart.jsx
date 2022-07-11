import * as VizzlyLib from "@vizzly/components";

export default () => (
  <div style={{ width: "700px" }}>
<VizzlyLib.BarChart
  axisAngleX={-26}
  axisFontSize={11}
  axisLineWidthX={1}
  axisLineWidthY={1}
  axisTickLengthX={32}
  axisWidthX={36}
  axisWidthY={90}
  barStyles={{
    money_raised_usd_mean: {
      barColour: '#12fd16',
      decimalPlaces: 0
    }
  }}
  componentId="cmp_85887116395f48e4b07fe30ce3d71110"
  dimension={[
    'name'
  ]}
  displaySubject="Mean"
  displayTitle="Funds raised"
  filter={[]}
  fontFamily="Arial Black"
  host="https://api.vizzly.co"
  measure={[
    {
      aggregate: 'mean',
      field: 'money_raised_usd'
    }
  ]}
  showGrid
/>
  </div>
);
