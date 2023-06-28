import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { highlight } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { findButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/textOverrides/dashboard-filters',
  component: Vizzly.Dashboard,
};

export default meta;

export const CallToAction: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      textOverrides={{
        'dashboard-filters.call-to-action': 'where are you',
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

CallToAction.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    const button = findButtonByText('where are you') as HTMLElement;
    highlight(button);
  });
};
