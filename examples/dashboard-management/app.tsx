import * as React from "react";
import { createRoot } from "react-dom/client";
import { useDashboardManager } from "@vizzly/dashboard";

const fetchIdentity = async () => {
  const response = await fetch("https://app.vizzly.co/api/doc-examples-identity-callback");
  if(response.ok) {
    const tokens = await response.json();

    return tokens.accessTokens;
  };

  return null;
};

function App() {
  const { dashboards, createDashboard } = useDashboardManager(fetchIdentity, "https://example.vizzly.co/query-engine");

  return (
    <>
      <ul>
        {dashboards.map(dashboard => (
          <li>{dashboard.id}</li>
        ))}
      </ul>
      <button onClick={() => createDashboard({})}>Create a new dashboard</button>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
