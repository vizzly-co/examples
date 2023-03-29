import Vizzly from '@vizzly/dashboard';
import './App.css';

function App() {
  return (
    <Vizzly.Dashboard
    queryEngineEndpoint='https://example.vizzly.co/query-engine'
    identity={async () => {
      const response = await fetch("https://example.vizzly.co/api/identity?userId=generate-random");
      if(response.ok) {
        const tokens = await response.json();

        return tokens;
      };

      return null;
    }}
    />
  );
}

export default App;