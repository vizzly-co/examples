import Head from 'next/head'
import { Components, VizzlyGlobalStyles } from '@vizzly/components';

export default function Home() {
  return (
    <>
      <Head><title>Static Vizzly Studio example</title></Head>
      <VizzlyGlobalStyles />
      <header style={{marginBottom: "10px", height: "45px", background: "rgba(0, 0, 0, .8)"}} />
      <Components.Studio
        vizzlyApiConfig={{
          host: 'http://0.0.0.0:7080'
        }}
        runQueriesCallback={(queries) => {
          console.log("run queries", queries);

          return [];
        }}
        identityCallback={async () => {
          const identityConfig = {
            userReference: "usr_6789",
            organisationId: "org_7e58f56ceff84f80bc529b57f802d638",
            initialDashboard: "dsh_3c7cf8bdb724482ca71dd65e3bffd6c3",
            integritySignature: "todo: this."
          };

          return identityConfig;
        }}
        />
    </>
  )
};
