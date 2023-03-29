import React from "react";
import Head from "next/head";
import Vizzly from "@vizzly/dashboard";

export default function SelfHosted() {
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
        queryEngineEndpoint="https://example.vizzly.co/query-engine"
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
