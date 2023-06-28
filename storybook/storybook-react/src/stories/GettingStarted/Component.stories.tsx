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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
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
