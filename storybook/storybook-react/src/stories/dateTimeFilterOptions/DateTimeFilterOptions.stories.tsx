import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { highlight, highlightAndFocus } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { findButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/dateTimeFilterOptions',
  component: Vizzly.Dashboard,
};

export default meta;

export const Filter: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      dateTimeFilterOptions={{
        year_of_2020: {
          description: 'Year - 2020',
          range: {
            after: new Date('01/01/2020'),
            before: new Date('31/12/2020'),
          },
        },
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Filter.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    const filterByButton = baseCanvas.getByText('Filter by');
    userEvent.click(filterByButton);

    await screenUpdate(150);
    userEvent.click(baseCanvas.getByText('+ New dashboard filter'));
    await screenUpdate();
    userEvent.type(
      document.body.querySelector('[placeholder="Title"]') as HTMLElement,
      'Date of Hire'
    );

    userEvent.click(
      document.body.querySelector(
        '[placeholder="Which data sets will this filter impact?"]'
      ) as HTMLElement
    );
    await screenUpdate();
    userEvent.click(baseCanvas.getByText('Employment - sample'));

    await screenUpdate();
    userEvent.click(baseCanvas.getByText('Single select'));
    await screenUpdate();
    userEvent.click(baseCanvas.getByText('Time filter'));

    await screenUpdate();
    userEvent.click(
      document.body.querySelector(
        '[placeholder="Which fields are affected?"]'
      ) as HTMLElement
    );
    await screenUpdate();
    userEvent.click(baseCanvas.getByText('Employment - sample · Date of Hire'));

    await screenUpdate();
    userEvent.click(findButtonByText('Confirm'));
    await screenUpdate();
    userEvent.click(findButtonByText('Close'));
    await screenUpdate(150);

    userEvent.click(
      document.body.querySelector('[aria-label="Open"]') as HTMLElement
    );

    await screenUpdate(150);
    highlight(baseCanvas.getByText('Year - 2020'));
    await screenUpdate();
  });
};
