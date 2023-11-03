import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { getFieldsetFromLegend } from '../testing/form';
import { getAndHighlightItem, highlight, highlightAndFocus } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { findButtonByText, findLIButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/featureToggle/canConfigureLocalFilters',
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
        canConfigureLocalFilters: true,
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
    const editButton = findLIButtonByText('Add Local Filters');
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
        canConfigureLocalFilters: false,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

False.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async (element) => {
    await screenUpdate();
    const openMenu = element?.querySelector(
      '[aria-label="Options: Row 1 Cell 1"]'
    ) as Element;
    userEvent.click(openMenu);

    await screenUpdate(100);
  });
};
