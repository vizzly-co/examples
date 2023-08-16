import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';

import { waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { highlight } from '../testing/highlighter';
import { findButtonByText } from '../testing/buttons';
import { gitHubDarkTheme } from '../../../themes/github';
import { VizzlyTheming } from '@vizzly/dashboard/dist/shared-ui/src/types';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/developerTools/theme',
  component: Vizzly.Dashboard,
};

export default meta;

export const Highlighter: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      developerTools={{ theme: true }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

export const ThemeExample: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
        buttons: {
          primary: {
            fontWeight: 500,
            color: '#001d35',
            background: '#c2e7ff',
            boxShadow: 'unset',
            border: '1px solid transparent',
            fontSize: '0.875rem',
            padding: '16px 24px 17px',
            borderRadius: 16,
            '&:hover': {
              background: '#c2e7ff',
              boxShadow:
                '0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)',
            },
          },
        },
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

ThemeExample.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    highlight(findButtonByText('Filter by') as HTMLElement);
  });
};

export const ExampleDarkTheme: StoryFn = () => {
  return (
    <div style={{ background: '#161b22', color: '#7d8590' }}>
      <Vizzly.Dashboard
        theme={gitHubDarkTheme as VizzlyTheming.Base}
        parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
        queryEngineEndpoint="https://example.vizzly.co/query-engine"
        identity={getIdentity()}
      />
    </div>
  );
};
