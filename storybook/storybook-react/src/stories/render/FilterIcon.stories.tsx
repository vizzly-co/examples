import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { highlight } from '../testing/highlighter';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/render/FilterIcon',
  component: Vizzly.Dashboard,
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      renderFilterIcon={() => <span data-component="filter-icon">filter</span>}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Example.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    highlight(
      document.body.querySelector(
        '[data-component="filter-icon"]'
      ) as HTMLElement
    );
  });
};

export const Original: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Original.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    highlight(
      document.body.querySelector(
        '[data-component="filter-icon"]'
      ) as HTMLElement
    );
  });
};
