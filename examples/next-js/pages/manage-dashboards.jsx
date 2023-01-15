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
          let basicTable = VizzlyDashboardSDK.BasicTable.init(
            "das_69948d88edaf4e55a864a0f25357139f"
          );
          basicTable = VizzlyDashboardSDK.BasicTable.setFields(basicTable, [
            "User Name",
            "Region",
            "Customer Since",
          ]);

          let dashboard = VizzlyDashboardSDK.emptyDashboard();
          dashboard = VizzlyDashboardSDK.insertRow(dashboard, FIRST_ROW);
          dashboard = VizzlyDashboardSDK.setComponentOnDisplay(
            dashboard,
            basicTable,
            FIRST_ROW,
            FIRST_CELL
          );

          // Create a copy of a template, and override the dashboard itself
          // and the metadata.
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
