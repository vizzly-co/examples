import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { FunctionComponent, ReactNode } from 'react';
import { VizzlyComponents } from '@vizzly/dashboard/dist/shared-ui/src/types';
import { getAndHighlightItem, highlight } from '../testing/highlighter';
import { findButtonByText } from '../testing/buttons';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/render/ButtonComponent',
  component: Vizzly.Dashboard,
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <Vizzly.Dashboard
      theme={{
        detail: 'minimal',
        rowLimit: 2,
      }}
      renderButtonComponent={(props) => <ButtonAdapter {...props} />}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Example.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    highlight(findButtonByText('Filter by'));
  });
};

export const Original: StoryFn = () => {
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

Original.play = async () => {
  waitForElement('.vizzly_dashboard', async (element) => {
    highlight(findButtonByText('Filter by'));
  });
};

const MyButton: FunctionComponent<{
  label: ReactNode;
  type?: 'primary' | 'secondary' | 'suppressed';
  onClick: () => void;
  disabled?: boolean;
}> = (props) => {
  const { type = 'secondary' } = props;
  return (
    <button
      data-type={type}
      style={buttonStyles}
      onClick={() => props?.onClick()}
    >
      {props?.label}
    </button>
  );
};

const ButtonAdapter: FunctionComponent<
  VizzlyComponents.ComponentOverrides.Props.Button
> = (props) => {
  async function onClickHandler(): Promise<void> {
    props?.onClick && props?.onClick();
  }
  return (
    <MyButton
      label={props?.children}
      onClick={onClickHandler}
      type={props?.primary ? 'primary' : 'secondary'}
    />
  );
};

const root = {
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: 4,
  maxHeight: 28,
  boxShadow:
    'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(64, 68, 82, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(64, 68, 82, 0.08) 0px 2px 5px 0px',
};

const buttonStyles = {
  ...root,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '20px',
  padding: '4px 8px 4px 8px',
  color: '#414552',
  border: 0,
};
