import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Vizzly from '@vizzly/dashboard';

function App() {
    return (
      <Vizzly.Dashboard
        queryEngineEndpoint={'https://example.vizzly.co/query-engine'}
        identity={async () => {
          const response = await fetch("https://app.vizzly.co/api/doc-examples-identity-callback");
          if(response.ok) {
            const tokens = await response.json();
    
            return tokens.accessTokens;
          };
    
          return null;
        }}
      />
    )
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
