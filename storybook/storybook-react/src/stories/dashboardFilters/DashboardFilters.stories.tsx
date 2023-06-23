import Vizzly, { DataSet } from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { highlight } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/dashboardFilters',
  component: Vizzly.Dashboard,
};

export default meta;

export const SingleSelectFilter: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      dashboardFilters={(dataSet: DataSet[]) => {
        console.log(dataSet);
        const filters = [
          {
            type: 'singleSelectFilter',
            requiresValue: true,
            value: 'Engineering',
            appliesToFields: [
              {
                fieldId: 'fie_6',
                dataSetId: 'data_set_1',
              },
            ],
          },
        ];
        return filters;
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

SingleSelectFilter.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    await screenUpdate(100);
    highlight(
      document.body.querySelector('[data-component="filters"]') as HTMLElement
    );
  });
};

export const DateTimeFilter: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      dashboardFilters={(dataSet: DataSet[]) => {
        const filters = [
          {
            type: 'dateTimeFilter',
            requiresValue: true,
            value: {
              type: 'relative',
              value: '_vizzly_past_90_days',
            },
            appliesToFields: [
              {
                fieldId: 'fie_5',
                dataSetId: 'data_set_1',
              },
            ],
          },
        ];
        return filters;
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

DateTimeFilter.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    await screenUpdate(100);
    highlight(
      document.body.querySelector('[data-component="filters"]') as HTMLElement
    );
  });
};

export const CustomRangeDateTimeFilter: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      dashboardFilters={(dataSet: DataSet[]) => {
        const filters = [
          {
            type: 'dateTimeFilter',
            requiresValue: false,
            value: {
              type: 'fixedRange',
              before: new Date('01/06/2019'),
              after: new Date('01/08/2015'),
            },
            appliesToFields: [
              {
                fieldId: 'fie_5',
                dataSetId: 'data_set_1',
              },
            ],
          },
        ];
        return filters;
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

CustomRangeDateTimeFilter.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    await screenUpdate(100);
    highlight(
      document.body.querySelector('[data-component="filters"]') as HTMLElement
    );
  });
};

export const CombinedFilters: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      dashboardFilters={(dataSet: DataSet[]) => {
        const filters = [
          {
            type: 'singleSelectFilter',
            requiresValue: false,
            value: 'Engineering',
            appliesToFields: [
              {
                fieldId: 'fie_6',
                dataSetId: 'data_set_1',
              },
            ],
          },
          {
            type: 'dateTimeFilter',
            requiresValue: true,
            value: {
              type: 'relative',
              value: '_vizzly_past_90_days',
            },
            appliesToFields: [
              {
                fieldId: 'fie_5',
                dataSetId: 'data_set_1',
              },
            ],
          },
        ];
        return filters;
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

CombinedFilters.play = async () => {
  waitForElement('.vizzly_dashboard', async () => {
    await screenUpdate(100);
    highlight(
      document.body.querySelector('[data-component="filters"]') as HTMLElement
    );
  });
};
