import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Getting Started/Dashboard',
  component: Vizzly.Dashboard,
};

export default meta;

export const Dashboard: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 4,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      featureToggles={{
        allowPercentagesCustomField: false,
      }}
      identity={async () => {
        const response = await fetch(
          'https://app.vizzly.co/api/doc-examples-identity-callback'
        );
        if (response.ok) {
          const responseBody = await response.json();
          return responseBody.accessTokens;
        }
        return null;
      }}
    />
  );
};
