import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { highlight } from '../testing/highlighter';
import { findButtonsByText } from '../testing/buttons';
import { screenUpdate } from '../testing/utils';
import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/Feature Toggle/canCreateStandaloneComponents',
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
        canCreateStandaloneComponents: true,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

True.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    await screenUpdate();
    const selectTemplateButton = findButtonsByText('Add View');
    if (selectTemplateButton) {
      selectTemplateButton.map((button) => highlight(button));
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
        canCreateStandaloneComponents: false,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

False.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    await screenUpdate();
  });
};
