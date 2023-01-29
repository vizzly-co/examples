import React from 'react';
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
        type="in-browser"
        loadDataSetsCallback={async () => {
          const response = await fetch(`/api/resolve-data-sets`, {
            method: "post",
          });

          if (response.ok) {
            const dataSets = await response.json();
            return dataSets;
          }
        }}
        loadDataCallback={async (dataSet) => {
          const response = await fetch(`/api/data/${dataSet.id}`);

          if (response.ok) {
            const result = await response.json();

            return result;
          } else {
            console.error(`Failed to load data for data set ${dataSet.id}.`);

            return null;
          }
        }}
        identityCallback={async () => {
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