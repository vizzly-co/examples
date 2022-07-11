import { ComponentContextProvider, LineChart } from "@vizzly/components";

export default function Home() {
  return (
    <div style={{height: "600px", width: "800px", padding: "3rem"}}>
      <ComponentContextProvider
        componentId="cmp_887a70a0b0b64935936cddc6edfc272e"
        apiConfig={{ host: "https://api.vizzly.co" }}
      >
        <LineChart />
      </ComponentContextProvider>
    </div>
  );
}
