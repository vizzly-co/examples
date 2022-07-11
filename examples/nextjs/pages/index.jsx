import { ComponentContextProvider, BarChart } from "@vizzly/components";

export default function Home() {
  return (
    <div style={{ height: "600px", width: "800px", padding: "3rem" }}>
      <ComponentContextProvider
        componentId="cmp_85887116395f48e4b07fe30ce3d71110"
        apiConfig={{ host: "https://api.vizzly.co" }}
      >
        <BarChart />
      </ComponentContextProvider>
    </div>
  );
}
