import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';

import { waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { screenUpdate } from '../testing/utils';
import { highlight } from '../testing/highlighter';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/render/DeleteIcon',
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
      renderDeleteIcon={() => (
        <div data-component="renderDeleteIcon">delete</div>
      )}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Example.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    await screenUpdate();
    userEvent.click(
      document.body.querySelector(
        '[aria-label="Options: Row 1 Cell 1"]'
      ) as HTMLElement
    );
    await screenUpdate();
    highlight(
      document.querySelector(
        '[data-component="renderDeleteIcon"]'
      ) as HTMLElement
    );
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
    await screenUpdate();
    userEvent.click(
      document.body.querySelector(
        '[aria-label="Options: Row 1 Cell 1"]'
      ) as HTMLElement
    );
    await screenUpdate();
    highlight(
      document.querySelector(
        '[data-component="renderDeleteIcon"]'
      ) as HTMLElement
    );
  });
};
