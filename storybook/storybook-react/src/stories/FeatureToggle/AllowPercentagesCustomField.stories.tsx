import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import {
  openEditor,
  openAdvancedOptions,
  waitForElement,
} from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { getFieldsetFromLegend } from '../testing/form';
import { getAndHighlightItem } from '../testing/highlighter';
import { getIdentity } from '../factory/getIdentity';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/featureToggle/allowPercentagesCustomField',
  component: Vizzly.Dashboard,
};

export default meta;

export const True: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      featureToggles={{
        allowPercentagesCustomField: true,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

True.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
    await openAdvancedOptions(baseCanvas);
    getCustomMetric(baseCanvas);
    const fieldset = getFieldsetFromLegend(baseCanvas, 'Custom metrics');
    await screenUpdate();

    getAndHighlightItem(fieldset, '[data-component="dropdown"]');
  });
};

export const False: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      featureToggles={{
        allowPercentagesCustomField: false,
      }}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

False.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
    await openAdvancedOptions(baseCanvas);
    getCustomMetric(baseCanvas);

    const fieldset = getFieldsetFromLegend(baseCanvas, 'Custom metrics');
    await screenUpdate();
    getAndHighlightItem(fieldset, '[data-component="dropdown"]');
    await screenUpdate();
  });
};

async function getCustomMetric(baseCanvas: any) {
  const addCustomMetric = baseCanvas.getByText('+ Add custom metric');
  userEvent.click(addCustomMetric);
}
