import Head from 'next/head'
import { Components, VizzlyGlobalStyles, vizzlySelfHosted } from '@vizzly/components';

export default function SelfHostedDockerImage() {
  return (
    <>
      <Head><title>Vizzly self-hosted query engine example</title></Head>
      <VizzlyGlobalStyles />
      <header style={{marginBottom: "10px", height: "45px", background: "rgba(0, 0, 0, .8)"}} />
      <Components.Studio
        {...vizzlySelfHosted("http://0.0.0.0:8000")}
        vizzlyApiConfig={{
          host: 'http://0.0.0.0:7080'
        }}
        identityCallback={async () => {
          const response = await fetch("/api/identity-with-data-set-references");
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
