import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import ReactDOM from 'react-dom';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { getIdentity } from '../factory/getIdentity';
import { Component } from '@vizzly/dashboard/dist/shared-logic/src/Component/types';
import { highlight } from '../testing/highlighter';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/onEditorUpdate',
  component: Vizzly.Dashboard,
};

export default meta;

export const ChangeView: StoryFn = () => {
  const handleChange = (update: Component.Attributes) => {
    const container = document.querySelector(
      '[data-themeapi="modals.content"]'
    ) as HTMLElement;
    let footer = document.querySelector('[class*="vizzly_modal-footer"]');

    if (footer && footer.parentNode) {
      footer.parentNode.removeChild(footer);
    }
    if (container) {
      ReactDOM.render(
        <div>
          <h1 style={{ fontWeight: 'bold' }}>
            onEditorUpdate it selected the {update.type} view
          </h1>
          <code>{JSON.stringify(update)}</code>
        </div>,
        container
      );
      highlight(container);
    }
  };
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      onEditorUpdate={handleChange}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

ChangeView.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    await openEditor(baseCanvas);
    await screenUpdate();
    userEvent.click(baseCanvas.getByLabelText('View'));
    await screenUpdate();
    userEvent.click(baseCanvas.getByText('Pivot table'));
    await screenUpdate(300);
  });
};
