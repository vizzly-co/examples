import Vizzly, { DataSet } from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { highlight } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { DashboardFilters } from '@vizzly/dashboard/dist/shared-ui/src/contexts/DashboardBehaviour/types';

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
      dashboardFilters={() => {
        const filters: DashboardFilters = [
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      dashboardFilters={() => {
        const filters: DashboardFilters = [
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      dashboardFilters={() => {
        const filters: DashboardFilters = [
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      dashboardFilters={() => {
        const filters: DashboardFilters = [
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
