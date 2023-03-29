import Vizzly from '@vizzly/dashboard';
import './App.css';

function App() {
  return (
    <Vizzly.Dashboard
    queryEngineEndpoint='https://example.vizzly.co/query-engine'
    identity={async () => {
      const response = await fetch("https://app.vizzly.co/api/doc-examples-identity-callback");
      if(response.ok) {
        const tokens = await response.json();

        return tokens.accessTokens;
      };

      return null;
    }}
    />
  );
}

export default App;