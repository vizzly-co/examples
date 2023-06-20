import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { highlight } from '../testing/highlighter';
import { findButtonsByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/Feature Toggle/canUseComponentLibrary',
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
        canUseComponentLibrary: true,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={async () => {
        const response = await fetch(
          'https://app.vizzly.co/api/doc-examples-identity-callback'
        );
        if (response.ok) {
          const responseBody = await response.json();
          return responseBody.accessTokens;
        }
        return null;
      }}
    />
  );
};

True.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    const selectTemplateButton = findButtonsByText('Select Template');
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
        canUseComponentLibrary: false,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={async () => {
        const response = await fetch(
          'https://app.vizzly.co/api/doc-examples-identity-callback'
        );
        if (response.ok) {
          const responseBody = await response.json();
          return responseBody.accessTokens;
        }
        return null;
      }}
    />
  );
};

False.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    const selectTemplateButton = findButtonsByText('Select Template');
    if (selectTemplateButton) {
      selectTemplateButton.map((button) => highlight(button));
    }
  });
};
