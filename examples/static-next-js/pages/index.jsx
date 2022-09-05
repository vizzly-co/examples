import Head from 'next/head'
import { Components, VizzlyGlobalStyles } from '@vizzly/components';

export default function Home() {
  return (
    <>
      <Head><title>Static Vizzly Studio example</title></Head>
      <VizzlyGlobalStyles />
      <header style={{marginBottom: "10px", height: "45px", background: "rgba(0, 0, 0, .8)"}} />
      <Components.LocalDataStudio
        vizzlyApiConfig={{
          host: 'http://0.0.0.0:7080'
        }}
        loadDataCallback={async (dataSet) => {
          const response = await fetch(`/api/data/${dataSet.id}`);

          if(response.ok) {
            const result = await response.json();

            return result;
          } else {
            console.error(`Failed to load data for data set ${dataSet.id}.`);

            return null;
          }
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
