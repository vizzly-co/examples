import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Vizzly from '@vizzly/dashboard';

function App() {
    return (
      <Vizzly.Dashboard
        queryEngineEndpoint={'<< Your query engine endpoint >>'}
        identity={async () => {
          throw new Vizzly.NewVizzlyImplementation();
        }}
      />
    )
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
