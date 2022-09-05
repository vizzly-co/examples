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
