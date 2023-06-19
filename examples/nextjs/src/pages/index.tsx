import MenuAppBar from '@/components/Header';
import { useSessionHook } from '@/hooks/useSessionHook';
import Vizzly from '@vizzly/dashboard'
import { useEffect, useState } from 'react';

export default function Home() {
  const { isSignedIn } = useSessionHook();

  if(isSignedIn === null) return null;
  if(isSignedIn === false) return <p>Please sign in.</p>;

  return (
    <>
      <MenuAppBar />
      <div style={{padding: '20px 10px'}}>
        <Vizzly.Dashboard
          // Set your parent dashboard ID here. This is required if you use
          // multiple dashboards on your application. It can be found at https://app.vizzly.co/dashboards
          parentDashboardId='<< YOUR PARENT DASHBOARD ID >>'
          /*
            This identity callback hits an API route managed on this example app.
            It assumes the endpoint returns a response in the format:
            {
              dashboardAccessToken: string;
              dataAccessToken: string;
            }
          */
          identity={async () => {
            const response = await fetch('/api/identity');

            if(response.ok) {
              const accessTokens = await response.json();

              return accessTokens;
            };

            return null;
          }}
          // Provide your query engine endpoint here, including any base path
          queryEngineEndpoint='<< YOUR QUERY ENGINE ENDPOINT >>'
        />
      </div>
    </>
  )
}
