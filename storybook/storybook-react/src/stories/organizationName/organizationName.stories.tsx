import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { getIdentity } from '../factory/getIdentity';
import { findButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/organizationName',
  component: Vizzly.Dashboard,
};

export default meta;

export const Verified: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      organizationName="ABC Organization"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Verified.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await screenUpdate();
    const selectTemplateButton = findButtonByText('Select Template') as Element;
    await screenUpdate();
    userEvent.click(selectTemplateButton);
    await screenUpdate(300);

    userEvent.hover(
      baseCanvas.getByText('Verified by ABC Organization')
    );
    await screenUpdate();
  });
};
