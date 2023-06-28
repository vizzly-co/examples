import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { highlight } from '../testing/highlighter';
import { findButtonByText } from '../testing/buttons';
import { userEvent } from '@storybook/testing-library';
import { screenUpdate } from '../testing/utils';
import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/featureToggle/canEditComponentLibrary',
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
        canEditComponentLibrary: true,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

True.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    await screenUpdate();
    const selectTemplateButton = findButtonByText('Select Template') as Element;
    await screenUpdate();
    userEvent.click(selectTemplateButton);
    await screenUpdate();
    const createNewButton = findButtonByText('Create New');
    if (createNewButton) {
      highlight(createNewButton);
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
        canEditComponentLibrary: false,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

False.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    await screenUpdate();
    const selectTemplateButton = findButtonByText('Select Template') as Element;
    await screenUpdate();
    userEvent.click(selectTemplateButton);
    await screenUpdate();
  });
};
