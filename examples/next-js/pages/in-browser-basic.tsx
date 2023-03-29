import Head from "next/head";
import Vizzly from "@vizzly/dashboard";

export default function InBrowser() {
  return (
    <>
      <Head>
        <title>Vizzly in-browser example</title>
      </Head>
      <header
        style={{
          marginBottom: "10px",
          height: "45px",
          background: "rgba(0, 0, 0, .8)",
        }}
      />
      <Vizzly.Dashboard
        dataSets={async () => {
          return [
            {
              id: "das_1",
              name: "My first data set",
              fields: [
                {
                  dataType: "number" as const,
                  publicName: "Player age",
                  id: "fie_1",
                  canBeDimension: false,
                  canBeMeasure: true,
                },
                {
                  dataType: "string" as const,
                  publicName: "Game",
                  id: "fie_2",
                  canBeDimension: true,
                  canBeMeasure: false,
                },
                {
                  dataType: "number" as const,
                  publicName: "Score",
                  id: "fie_3",
                  canBeDimension: false,
                  canBeMeasure: true,
                },
                {
                  dataType: "date_time" as const,
                  publicName: "Recorded at",
                  id: "fie_4",
                  canBeDimension: false,
                  canBeMeasure: true,
                  allowedGranularities: ["month", "year"],
                },
              ],
            },
          ];
        }}
        data={async (dataSet) => {
          if (dataSet.id == "das_1") {
            return [
              {
                fie_1: 16,
                fie_2: "Space invaders",
                fie_3: 54,
                fie_4: "2023-01-30T08:21:25.459Z",
              },
              {
                fie_1: 12,
                fie_2: "Space invaders",
                fie_3: 54,
                fie_4: "2023-02-13T08:21:25.459Z",
              },
              {
                fie_1: 9,
                fie_2: "Space invaders",
                fie_3: 4,
                fie_4: "2023-03-13T08:21:25.459Z",
              },
              {
                fie_1: 19,
                fie_2: "Space invaders",
                fie_3: 140,
                fie_4: "2023-04-07T08:21:25.459Z",
              },
              {
                fie_1: 90,
                fie_2: "Tetris",
                fie_3: 7,
                fie_4: "2023-03-13T08:21:25.459Z",
              },
              {
                fie_1: 73,
                fie_2: "Tetris",
                fie_3: 68,
                fie_4: "2023-04-07T08:21:25.459Z",
              },
            ];
          } else {
            throw "Unknown data set.";
          }
        }}
        identity={async () => {
          const response = await fetch("/api/identity");
          if (response.ok) {
            const tokens = await response.json();

            return tokens;
          }

          return null;
        }}
      />
    </>
  );
}
