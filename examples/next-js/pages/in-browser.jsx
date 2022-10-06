import Head from 'next/head'
import { Components, VizzlyGlobalStyles } from '@vizzly/components';

export default function InBrowser() {
  return (
    <>
      <Head><title>Vizzly in-browser example</title></Head>
      <VizzlyGlobalStyles />
      <header style={{marginBottom: "10px", height: "45px", background: "rgba(0, 0, 0, .8)"}} />
      <Components.LocalDataStudio
        loadDataSetsCallback={async (identityConfig) => {
          const response = await fetch(`/api/resolve-data-sets`, {
            method: "post",
            body: JSON.stringify({ dataSets: identityConfig.dataSets })
          });

          if(response.ok) {
            const dataSets = await response.json();
            return dataSets;
          };
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
          const response = await fetch("/api/identity?type=custom");
          if(response.ok) {
            const identityConfig = await response.json();

            return identityConfig.identityConfig;
          };

          return null;
        }}
        />
    </>
  )
};
