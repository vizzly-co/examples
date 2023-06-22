import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { screenUpdate } from '../testing/utils';
import { highlight } from '../testing/highlighter';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/render/CloseIcon',
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
      renderCloseIcon={() => <div>close</div>}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Example.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async (element) => {
    await openEditor(baseCanvas);
    screenUpdate(100);
    const elements = document.body.querySelectorAll('[aria-label="Remove"]');
    elements.forEach((element) => {
      highlight(element as HTMLElement);
    });
  });
};

export const Original: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Original.play = async () => {
  const baseCanvas = within(document.body);

  waitForElement('.vizzly_dashboard', async (element) => {
    await openEditor(baseCanvas);
    screenUpdate(100);
    const elements = document.body.querySelectorAll('[aria-label="Remove"]');
    elements.forEach((element) => {
      highlight(element as HTMLElement);
    });
  });
};
