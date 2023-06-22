import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { screenUpdate } from '../testing/utils';
import { getAndHighlightItem } from '../testing/highlighter';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/render/DateTimeInput',
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
      renderDateTimeInput={(props) => (
        <div data-component="renderDateTimeInput">renderDateTimeInput</div>
      )}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Example.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async (element) => {
    highlightDateTimeInput(baseCanvas);
    getAndHighlightItem(document.body, '[data-component="renderDateTimeInput"');
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
    highlightDateTimeInput(baseCanvas);
  });
};

async function highlightDateTimeInput(baseCanvas: any) {
  await openEditor(baseCanvas);
  await screenUpdate(100);
  userEvent.click(baseCanvas.getByText('Advanced Options'));
  await screenUpdate();
  userEvent.click(baseCanvas.getByText('+ Add filter'));
  await screenUpdate();

  userEvent.click(baseCanvas.getAllByLabelText('Field')[0]);
  await screenUpdate();
  userEvent.click(baseCanvas.getByText('Date of Birth'));
  await screenUpdate();
  userEvent.click(baseCanvas.getAllByLabelText('Operator')[0]);
  await screenUpdate();
  userEvent.click(baseCanvas.getAllByText('Equal to')[0]);
}
