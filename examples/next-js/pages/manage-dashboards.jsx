import Vizzly, { VizzlyDashboardSDK } from "@vizzly/dashboard";

const { FIRST_ROW, FIRST_CELL } = VizzlyDashboardSDK.displayPositions;

// The same identityCallback as required by the Vizzly.Dashboard component.
const identityCallback = async () => {
  const response = await fetch("/api/identity?type=custom");
  if (response.ok) {
    const tokens = await response.json();

    return tokens;
  }

  return null;
};

const ManageDashboards = () => {
  // The Vizzly react hook to provide the end-user's dashboards, and functions to create and delete dashboards
  const { dashboards, deleteTemplateCopy, createTemplateCopy } =
    Vizzly.useDashboardManager(identityCallback);

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4">
        {dashboards.map((dashboard) => (
          <div className="bg-gray-100 p-3 rounded-md relative">
            {dashboard.id}
            Meta: {JSON.stringify(dashboard.metadata)}
            <button
              className="text-xs absolute top-4 right-3"
              onClick={() => {
                const deleted = deleteTemplateCopy(dashboard.id);
                if (deleted) {
                  console.log("Deleted dashboard", dashboard.id);
                } else {
                  console.log("Failed to delete dashboard", dashboard.id);
                }
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        className="py-1 px-2 shadow-sm bg-blue-500 text-white rounded-sm mt-3"
        onClick={async () => {
          // Create a "basic table" component and provide the data set for it to use.
          let basicTable = VizzlyDashboardSDK.BasicTable.init(
            "das_69948d88edaf4e55a864a0f25357139f"
          );

          // Set the fields on the table by specifying a list of IDs from the data set
          // defined in your Vizzly config file.
          basicTable = VizzlyDashboardSDK.BasicTable.setFields(basicTable, [
            "User Name",
            "Region",
            "Customer Since",
          ]);

          // Initialize an empty dashboard that we'll use to override the template.
          let dashboard = VizzlyDashboardSDK.emptyDashboard();

          // Add a row to the dashboard
          dashboard = VizzlyDashboardSDK.insertRow(dashboard, FIRST_ROW);

          // Add the basic table component to the first row, first cell of the
          // dashboard.
          dashboard = VizzlyDashboardSDK.setComponentOnDisplay(
            dashboard,
            basicTable,
            FIRST_ROW,
            FIRST_CELL
          );

          // Call the Vizzly API to create a copy of the template, but with the
          // dashboard and metadata overrides.
          const created = await createTemplateCopy({
            dashboard,
            metadata: { anyKeyValue: "that you want" },
          });
          if (created) {
            console.log("Created a new dashboard");
          } else {
            console.log("Failed to create a new dashboard");
          }
        }}
      >
        Create New
      </button>
    </div>
  );
};

export default ManageDashboards;
