import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { highlight } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';
import { getFieldsetFromLegend } from '../testing/form';
import { DataPanelConfig } from '@vizzly/dashboard/dist/shared-logic/src/DataPanelConfig/types';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/dataPanel',
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
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Unchanged.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
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
      dataPanel={(panelInfo: DataPanelConfig) => {
        let viewsIndex = panelInfo.findIndex((item) => item.type === 'views');

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
    highlight(getFieldsetFromLegend(baseCanvas, 'View', 1) as HTMLElement);
  });
};

export const Reworded: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      dataPanel={(panelInfo: DataPanelConfig) => {
        let dataSetIndex = panelInfo.findIndex(
          (item) => item.type === 'dataSet'
        );

        if (dataSetIndex !== -1) {
          panelInfo[dataSetIndex].title = 'Entity type';
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
    highlight(getFieldsetFromLegend(baseCanvas, 'Entity type') as HTMLElement);
  });
};
