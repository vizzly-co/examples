import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';

import { waitForElement } from '../testing/helpers';
import { getAndHighlightItem } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/featureToggle/canAddNewRows',
  component: Vizzly.Dashboard,
};

export default meta;

export const True: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 4,
      }}
      featureToggles={{
        canAddNewRows: true,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

True.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    const elements = element?.querySelector(
      '[data-component="add-cell-button"]'
    ) as HTMLElement;
    if (elements) {
      userEvent.hover(elements);
    }
    getAndHighlightItem(element, '[data-component="add-cell-button"]');
  });
};

export const False: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 4,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      featureToggles={{
        canAddNewRows: false,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

False.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    const elements = element?.querySelector(
      '[data-component="add-cell-button"]'
    ) as HTMLElement;
    if (elements) {
      userEvent.hover(elements);
    }
    getAndHighlightItem(element, '[data-component="add-cell-button"]');
  });
};
