import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { highlight } from '../testing/highlighter';
import { findLIButtonByText } from '../testing/buttons';
import { userEvent } from '@storybook/testing-library';
import { screenUpdate } from '../testing/utils';
import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/featureToggle/canDownloadComponentData',
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      featureToggles={{
        canDownloadComponentData: true,
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
    const editButton = findLIButtonByText('Download');
    if (editButton) {
      highlight(editButton);
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      featureToggles={{
        canDownloadComponentData: false,
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
