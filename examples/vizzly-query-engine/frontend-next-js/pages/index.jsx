import Head from 'next/head'
import Vizzly from '@vizzly/dashboard';

export default function Home() {
  return (
    <>
      <Head><title>Vizzly self-hosted query engine example</title></Head>
      <header style={{marginBottom: "10px", height: "45px", background: "rgba(0, 0, 0, .8)"}} />
      <Vizzly.Dashboard
        type='self-hosted'
        vizzlyDockerImageEndpoint='http://0.0.0.0:8000'
        identityCallback={async () => {
          const response = await fetch("/api/identity");
          if(response.ok) {
            const tokens = await response.json();

            return tokens;
          };

          return null;
        }}
        />
    </>
  )
};
