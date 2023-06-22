import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { highlight, highlightAndFocus } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { findButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/numberFormatOptions',
  component: Vizzly.Dashboard,
};

export default meta;

export const FormatPanel: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      numberFormatOptions={{
        custom: {
          description: 'Custom Option',
          formatter: (v: number) => `${v}`,
        },
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

FormatPanel.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
    userEvent.click(findButtonByText('Format') as Element);
    await screenUpdate();
    const format = baseCanvas.getAllByLabelText('Format')[1];
    userEvent.click(format);
    await screenUpdate();
    const dropdown = document?.querySelector(
      '[data-component="dropdown-options"]'
    ) as HTMLElement;

    highlightAndFocus(findListOption(dropdown, 'Custom Option') as HTMLElement);
  });
};

FormatPanel.parameters = {
  chromatic: { delay: 600 },
};

export const Table: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      numberFormatOptions={{
        custom: {
          description: 'Custom Option',
          formatter: (v: number) => `${v}`,
        },
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Table.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async (element) => {
    await openEditor(baseCanvas);
    await screenUpdate(100);
    userEvent.click(baseCanvas.getByLabelText('View'));
    await screenUpdate(100);
    userEvent.click(baseCanvas.getByText('Pivot table'));
    await screenUpdate(150);
    userEvent.click(findButtonByText('Salary') as Element);
    await screenUpdate(100);
    userEvent.click(baseCanvas.getByText('Select...'));
    const dropdown = document?.querySelector(
      '[data-component="dropdown-options"]'
    ) as HTMLElement;
    await screenUpdate(100);

    highlight(findListOption(dropdown, 'Custom Option') as HTMLElement);
    await screenUpdate(300);
  });
};

const findListOption = (element: HTMLElement, text: string) => {
  const spanElement = Array.from(element?.querySelectorAll('span')).find(
    (el) => el.textContent === text
  );
  if (spanElement) {
    const parentButton = spanElement.closest('div[role="button"]');

    if (parentButton) {
      return parentButton;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
