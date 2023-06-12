import * as React from "react";
import { createRoot } from "react-dom/client";
import Vizzly from "@vizzly/dashboard";

const ALLOWED_OPERATORS = ['=', '!=', '>', '<', '>=', '<=', 'is_one_of', 'is_not_one_of'];

function App() {
  return (
    <Vizzly.Dashboard
        dataSets={async () => {
          return [
            {
              id: "data_set_1",
              name: "My first data set",
              fields: [
                {
                  dataType: "number" as const,
                  publicName: "Player age",
                  id: "fie_1",
                  canBeDimension: false,
                  canBeMeasure: true,
                  allowedOperators: ALLOWED_OPERATORS
                },
                {
                  dataType: "string" as const,
                  publicName: "Game",
                  id: "fie_2",
                  canBeDimension: true,
                  canBeMeasure: false,
                  allowedOperators: ALLOWED_OPERATORS
                },
                {
                  dataType: "number" as const,
                  publicName: "Score",
                  id: "fie_3",
                  canBeDimension: false,
                  canBeMeasure: true,
                  allowedOperators: ALLOWED_OPERATORS
                },
                {
                  dataType: "date_time" as const,
                  publicName: "Recorded at",
                  id: "fie_4",
                  canBeDimension: false,
                  canBeMeasure: true,
                  allowedGranularities: ["month", "year"],
                  allowedOperators: ALLOWED_OPERATORS
                },
              ],
            },
          ];
        }}
        data={async (dataSet) => {
          if (dataSet.id == "data_set_1") {
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
          const response = await fetch("https://app.vizzly.co/api/doc-examples-identity-callback");
          if (response.ok) {
            const responseBody = await response.json();
            return responseBody.accessTokens;
          }
          return null;
        }}
      />
  );
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
