import Vizzly from "@vizzly/dashboard";

const identityCallback = async () => {
  const response = await fetch("/api/identity?type=custom");
  if(response.ok) {
    const tokens = await response.json();

    return tokens;
  };

  return null;
};

const ManageDashboards = () => {
  const { dashboards, deleteEndUserDashboard, createNewEndUserDashboard } = Vizzly.useDashboardManager(identityCallback);

  return (
    <div className="p-6">
    <div className="grid grid-cols-3 gap-4">
      {dashboards.map(dashboard => (
        <div className="bg-gray-100 p-3 rounded-md relative">
          {dashboard.id}
          <button className="text-xs absolute top-4 right-3" onClick={() => deleteEndUserDashboard(dashboard.id)}>Delete</button>
        </div>
      ))}
    </div>
    <button className="py-1 px-2 shadow-sm bg-blue-500 text-white rounded-sm mt-3" onClick={() => {
      const created = createNewEndUserDashboard();
      if(created){
        console.log("Created a new dashboard");
      } else {
        console.log("Failed to create a new dashboard");
      }
    }}>Create New</button>
    </div>
  );
};

export default ManageDashboards;