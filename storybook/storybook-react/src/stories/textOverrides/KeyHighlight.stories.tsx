import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/textOverrides',
  component: Vizzly.Dashboard,
};

export default meta;

export const HighlightKeys: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      developerTools={{ translationKeys: true }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};
