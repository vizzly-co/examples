import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { getFieldsetFromLegend } from '../testing/form';
import { getAndHighlightItem, highlightAndFocus } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { findButtonByText } from '../testing/buttons';

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
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);

    await screenUpdate(150);
    userEvent.click(findButtonByText('Add-ons') as Element);
    await screenUpdate();
    userEvent.click(baseCanvas.getByText('+ Add chart filter'));

    const fieldset = getFieldsetFromLegend(baseCanvas, 'Chart Filter');
    await screenUpdate();
    highlightAndFocus(fieldset);
    getAndHighlightItem(fieldset, '[data-component="dropdown"]');
    await screenUpdate(150);
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
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
  });
};
