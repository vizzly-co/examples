import * as React from "react";
import { createRoot } from "react-dom/client";
import Vizzly, { useDashboardManager } from "@vizzly/dashboard";

const fetchIdentity = async () => {
  const response = await fetch("https://app.vizzly.co/api/doc-examples-identity-callback");
  if(response.ok) {
    const tokens = await response.json();

    return tokens.accessTokens;
  };

  return null;
};

// Return an empty query engine config.
const queryEngineConfig = async () => ({
  supportedOperators: {},
  supportedAggregates: {},
  supportedTimeTruncFunctions: {}
})

function App() {
  const { dashboards, createTemplateCopy } = useDashboardManager(fetchIdentity, queryEngineConfig);

  return (
    <>
      <ul>
        {dashboards.map(dashboard => (
          <li>{dashboard.id}</li>
        ))}
      </ul>
      <button onClick={() => createTemplateCopy({})}>Create a new dashboard</button>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
