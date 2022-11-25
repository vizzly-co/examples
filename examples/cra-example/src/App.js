import Vizzly from '@vizzly/dashboard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Vizzly.Dashboard
    type='self-hosted'
    vizzlyDockerImageEndpoint='http://0.0.0.0:8000'
    identityCallback={async () => {
      const response = await fetch("http://0.0.0.0:3005/api/identity");
      if(response.ok) {
        const identityConfig = await response.json();

        return identityConfig.identityConfig;
      };

      return null;
    }}
    />
  );
}

export default App;