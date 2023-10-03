import * as React from "react";
import { createRoot } from "react-dom/client";
import Vizzly, { useInBrowserDashboardManager } from "@vizzly/dashboard";
import { DATASETS } from "./constants";
import { fetchData } from "./fetchData";

let cachedTokens = null;
const fetchIdentity = async () => {
  if(cachedTokens) return cachedTokens;
  const response = await fetch("https://app.vizzly.co/api/doc-examples-identity-callback");
  if(response.ok) {
    const tokens = await response.json();

    cachedTokens = tokens.accessTokens;
  };

  return cachedTokens;
};

function App() {
  const { dashboards, createDashboard, VizzlySDK } = useInBrowserDashboardManager(fetchIdentity);
  const lastCreatedDashboardId = (dashboards[0] || {id: undefined}).id;

  const doCreate = async () => {
    if(VizzlySDK) {
      const {FIRST_ROW, SECOND_ROW, THIRD_ROW, FIRST_CELL} = VizzlySDK.displayPositions;

      let customDashboard = VizzlySDK.Dashboard.emptyDashboard();
      customDashboard = VizzlySDK.Dashboard.insertRow(customDashboard, FIRST_ROW, {height: 130});
      customDashboard = VizzlySDK.Dashboard.insertRow(customDashboard, SECOND_ROW);
      customDashboard = VizzlySDK.Dashboard.insertRow(customDashboard, THIRD_ROW);

      // add 2 cells to the first row
      customDashboard = VizzlySDK.Dashboard.appendEmptyCell(customDashboard, FIRST_ROW);
      customDashboard = VizzlySDK.Dashboard.appendEmptyCell(customDashboard, FIRST_ROW);

      // add 1 cell to the second row
      customDashboard = VizzlySDK.Dashboard.appendEmptyCell(customDashboard, SECOND_ROW);
      // customDashboard = VizzlySDK.Dashboard.appendEmptyCell(customDashboard, SECOND_ROW);

      // add 2 cells to the third row
      customDashboard = VizzlySDK.Dashboard.appendEmptyCell(customDashboard, THIRD_ROW);
      customDashboard = VizzlySDK.Dashboard.appendEmptyCell(customDashboard, THIRD_ROW);

      const singleStat = VizzlySDK.SingleStat.init(DATASETS[0].id, {
        type: 'singleStat',
        measure: [{
          field: DATASETS[0].fields[0].id,
          aggregate: 'count'
        }]
      });

      const barChart = VizzlySDK.BarChart.init(DATASETS[0].id, {
        type: 'barChart',
        measure: [{
          field: DATASETS[0].fields[0].id,
          aggregate: 'count'
        }],
        dimension: [{
          field: DATASETS[0].fields[1].id,
          function: 'none'
        }]
      });

      customDashboard.componentLibrary = [{colSpan: 12, attributes: {...barChart, displayTitle: 'I have been added to the view gallery'}, localFilters: [], reports: [], results: []}]

      customDashboard = VizzlySDK.Dashboard.setComponentOnDisplay(customDashboard, singleStat, FIRST_ROW, FIRST_CELL);
      customDashboard = VizzlySDK.Dashboard.setComponentOnDisplay(customDashboard, barChart, SECOND_ROW, FIRST_CELL);

      await createDashboard({ dashboard: customDashboard })
    }
  };

  return (
    <>
      <ul>
        {dashboards.map(dashboard => (
          <li>{dashboard.id}</li>
        ))}
      </ul>
      <button onClick={() => doCreate()}>Create a new dashboard</button>
      <div key={`dashboard_${lastCreatedDashboardId}`}>
        <h3>Rendering dashboard {lastCreatedDashboardId}</h3>
      <Vizzly.Dashboard
        dashboardId={lastCreatedDashboardId}
        dataSets={async () => DATASETS}
        data={fetchData}
        identity={fetchIdentity}
      />
      </div>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
