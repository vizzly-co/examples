import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import ReactDOM from 'react-dom';

import { openEditor, waitForElement } from '../testing/helpers';
import { screenUpdate } from '../testing/utils';
import { getIdentity } from '../factory/getIdentity';
import { Component } from '@vizzly/dashboard/dist/shared-logic/src/Component/types';
import { highlight } from '../testing/highlighter';
import Modal from 'react-modal';
import { Fragment, FunctionComponent } from 'react';
import React from 'react';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/OnViewClick',
  component: Vizzly.Dashboard,
};

export default meta;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "480px"
  },
};

export const RawData: StoryFn = () => <DemoComponent />;

RawData.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    const clickableElement = await baseCanvas.findAllByText('HR Manager');
    userEvent.click(clickableElement[0]);

    await screenUpdate();
    const modal = document.body.querySelector('[class*="ReactModal__Content"]');
    highlight(modal as HTMLElement);
  });
};


export const FormattedData: StoryFn = () => <DemoComponent />;

FormattedData.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async () => {
    const clickableElement = await baseCanvas.findAllByText('HR Manager');
    userEvent.click(clickableElement[1]);

    await screenUpdate();
    const modal = document.body.querySelector('[class*="ReactModal__Content"]');
    highlight(modal as HTMLElement);
  });
};

const DemoComponent:FunctionComponent = () => {
  const [modalAttributes, setModalAttributes] = React.useState<
    Component.OnViewClick | undefined
  >(undefined);

  return (
    <Fragment>
      {modalAttributes?.viewId ===
        'view_9b3c0139-4f8e-400c-8f42-8446d19908dd' && (
        <Modal
          isOpen={!!modalAttributes}
          onRequestClose={() => setModalAttributes(undefined)}
          contentLabel="Employee"
          style={customStyles}
        >
          {'fields' in modalAttributes && modalAttributes.fields && (
            <Fragment>
              {modalAttributes.fields['fie_1'] === 1 ? (
                <Fragment>
                  <p style={{ marginTop: 0, fontWeight: 'bold' }}>
                    Visualisation of the data returned for Row 1
                  </p>
                  <code>{JSON.stringify(modalAttributes, null, 2)}</code>
                </Fragment>
              ) : (
                <Fragment>
                  <p>
                    <strong>Employee Id:</strong>{' '}
                    {modalAttributes.fields['fie_1']}
                  </p>
                  <p>
                    <strong>Job Title:</strong>{' '}
                    {modalAttributes.fields['fie_7']}
                  </p>
                  <p>
                    <strong>Salary:</strong> {modalAttributes.fields['fie_8']}
                  </p>
                  <div style={{ textAlign: 'right' }}>
                    <button style={{ padding: '6px 8px', borderRadius: 8 }}>
                      Go to Employee
                    </button>
                  </div>
                </Fragment>
              )}
            </Fragment>
          )}
        </Modal>
      )}
      <Vizzly.Dashboard
        theme={{
          detail: 'minimal',
          rowLimit: 2,
        }}
        parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
        onViewClick={(attributes: Component.OnViewClick) =>
          setModalAttributes(attributes)
        }
        queryEngineEndpoint="https://example.vizzly.co/query-engine"
        identity={getIdentity()}
      />
    </Fragment>
  );
}