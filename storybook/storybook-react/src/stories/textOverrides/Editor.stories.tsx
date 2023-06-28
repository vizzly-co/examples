import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { openEditor, waitForElement } from '../testing/helpers';
import { highlight } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { within } from '@storybook/testing-library';
import { findButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/textOverrides/editor.tabs.heading',
  component: Vizzly.Dashboard,
};

export default meta;

export const Data: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      textOverrides={{
        'editor.tab.heading.data': 'Here!',
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Data.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async (element) => {
    await openEditor(baseCanvas);
    const button = findButtonByText('Here!') as HTMLElement;
    highlight(button);
  });
};
export const Format: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      textOverrides={{
        'editor.tab.heading.format': 'Here!',
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Format.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async (element) => {
    await openEditor(baseCanvas);
    const button = findButtonByText('Here!') as HTMLElement;
    highlight(button);
  });
};
