import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { highlight } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { getFieldsetFromLegend } from '../testing/form';
import { findButtonByText } from '../testing/buttons';
import {
  AxisLabelsSection,
  FormatPanelConfig,
} from '@vizzly/dashboard/dist/shared-logic/src/FormatPanelConfig/types';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/formatPanel',
  component: Vizzly.Dashboard,
};

export default meta;

export const Unchanged: StoryFn = () => {
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

Unchanged.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
    userEvent.click(findButtonByText('Format') as Element);
    await screenUpdate();
    const dataPanel = document.body.querySelector(
      '[class*="vizzly_tab-panel"]'
    ) as HTMLElement;
    highlight(dataPanel);
  });
};

export const Reordered: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      formatPanel={(panelInfo: FormatPanelConfig) => {
        let viewsIndex = panelInfo.findIndex(
          (item) => item.type === 'axisLabels'
        );

        if (viewsIndex !== -1) {
          let views = panelInfo.splice(viewsIndex, 1)[0];
          panelInfo.unshift(views);
        }
        return panelInfo;
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Reordered.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
    await screenUpdate();
    userEvent.click(findButtonByText('Format') as Element);
    await screenUpdate();
    highlight(getFieldsetFromLegend(baseCanvas, 'Axis Labels') as HTMLElement);
    await screenUpdate();
  });
};

export const Reworded: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      formatPanel={(panelInfo: FormatPanelConfig) => {
        let formatIndex = panelInfo.findIndex(
          (item) => item.type === 'axisLabels'
        );

        if (formatIndex !== -1) {
          let axisLabels = panelInfo[formatIndex] as AxisLabelsSection;

          axisLabels.title = 'Labels';

          axisLabels.x.title = 'Your New X Axis Title';
          axisLabels.y.title = 'Your New Y Axis Title';

          panelInfo[formatIndex] = axisLabels;
        }
        return panelInfo;
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Reworded.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
    await screenUpdate();
    userEvent.click(findButtonByText('Format') as Element);
    await screenUpdate();
    highlight(getFieldsetFromLegend(baseCanvas, 'Labels') as HTMLElement);
    await screenUpdate();
  });
};
