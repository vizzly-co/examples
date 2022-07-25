import { ComponentContextProvider, BarChart } from "@vizzly/components";

export default function Home() {
  return (
    <div style={{ height: "600px", width: "800px", padding: "3rem" }}>
      <ComponentContextProvider
        componentId="cmp_57b968134cec42aa9c50c9f2a5cf0e6e"
        apiConfig={{ host: "https://api.vizzly.co" }}
      >
        <BarChart
          secureFilterCallback={async () => {
            const response = await fetch("/api/sign-my-filters");

            if (response) {
              const { secureFilters } = await response.json();
              console.log("secureFilters", secureFilters);
              return secureFilters;
            } else {
              alert("Fetching secure filters broke.");
            }
          }}
        />
      </ComponentContextProvider>
    </div>
  );
}
