import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { screenUpdate } from '../testing/utils';
import { getAndHighlightItem } from '../testing/highlighter';
import { findButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/render/EditIcon',
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      renderEditIcon={() => <div data-component="renderEditIcon">edit</div>}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Example.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    await getToEditButton();
    getAndHighlightItem(document.body, '[data-component="renderEditIcon"');
  });
};

export const Original: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Original.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    await getToEditButton();
  });
};
async function getToEditButton() {
  const baseCanvas = within(document.body);
  const filterByButton = baseCanvas.getByText('Filter by');
  userEvent.click(filterByButton);

  await screenUpdate(150);
  userEvent.click(baseCanvas.getByText('+ New dashboard filter'));
  await screenUpdate();
  userEvent.type(
    document.body.querySelector('[placeholder="Title"]') as HTMLElement,
    'New Value'
  );

  userEvent.click(findButtonByText('Confirm'));
  await screenUpdate();
}
