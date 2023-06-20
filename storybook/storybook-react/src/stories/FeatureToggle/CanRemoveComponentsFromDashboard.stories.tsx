import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { highlight } from '../testing/highlighter';
import { findLIButtonByText } from '../testing/buttons';
import { userEvent } from '@storybook/testing-library';
import { screenUpdate } from '../testing/utils';
import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/Feature Toggle/canRemoveComponentsFromDashboard',
  component: Vizzly.Dashboard,
};

export default meta;

export const True: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      featureToggles={{
        canRemoveComponentsFromDashboard: true,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

True.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    await screenUpdate();
    const openMenu = element?.querySelector(
      '[aria-label="Options: Row 1 Cell 1"]'
    ) as Element;
    userEvent.click(openMenu);

    await screenUpdate(100);
    const removeButton = findLIButtonByText('Remove');
    if (removeButton) {
      highlight(removeButton);
    }
  });
};

export const False: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      featureToggles={{
        canRemoveComponentsFromDashboard: false,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

False.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    await screenUpdate();
    const openMenu = element?.querySelector(
      '[aria-label="Options: Row 1 Cell 1"]'
    ) as Element;
    userEvent.click(openMenu);
  });
};
