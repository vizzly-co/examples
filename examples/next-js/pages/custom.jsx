import Head from 'next/head'
import { Components, VizzlyGlobalStyles } from '@vizzly/components';

export default function Custom() {
  return (
    <>
      <Head><title>Vizzly Studio custom query example</title></Head>
      <VizzlyGlobalStyles />
      <header style={{marginBottom: "10px", height: "45px", background: "rgba(0, 0, 0, .8)"}} />
      <Components.Studio
        vizzlyApiConfig={{
          host: 'http://0.0.0.0:7080'
        }}
        runQueriesCallback={async (queries) => {
          const response = await fetch(`/api/create-results`, {
            method: "post",
            body: JSON.stringify({ queries })
          });

          if(response.ok) {
            const results = await response.json();

            return results;
          } else {
            console.error(`Failed to run query.`);

            return null;
          }
        }}
        identityCallback={async () => {
          const response = await fetch("/api/identity");
          if(response.ok) {
            const identityConfig = await response.json();

            return identityConfig;
          };

          return null;
        }}
        />
    </>
  )
};
