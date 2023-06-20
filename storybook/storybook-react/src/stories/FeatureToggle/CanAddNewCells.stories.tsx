import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';

import { waitForElement } from '../testing/helpers';
import { getAndHighlightItem } from '../testing/highlighter';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/Feature Toggle/canAddNewCells',
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
        canAddNewCells: true,
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
  waitForElement('.vizzly_dashboard', async (element) => {
    const elements = element?.querySelector(
      '[data-component="add-cell"]'
    ) as HTMLElement;
    if (elements) {
      userEvent.hover(elements);
    }
    getAndHighlightItem(element, '[data-component="add-cell"]');
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
        canAddNewCells: false,
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
  waitForElement('.vizzly_dashboard', async (element) => {
    const elements = element?.querySelector(
      '[data-component="add-cell"]'
    ) as HTMLElement;
    if (elements) {
      userEvent.hover(elements);
    }
    getAndHighlightItem(element, '[data-component="add-cell"]');
  });
};
