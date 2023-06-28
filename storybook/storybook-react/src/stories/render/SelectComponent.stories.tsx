import Vizzly from '@vizzly/dashboard';
import type { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { openEditor, waitForElement } from '../testing/helpers';
import { getIdentity } from '../factory/getIdentity';
import { FunctionComponent } from 'react';
import { VizzlyComponents } from '@vizzly/dashboard/dist/shared-ui/src/types';
import { screenUpdate } from '../testing/utils';
import { highlight } from '../testing/highlighter';

const meta: Meta<typeof Vizzly.Dashboard> = {
  title: 'Dashboard Props/render/SelectComponent',
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
      parentDashboardId="dsh_9cbe8abaa11b4f839ca1018bd4aabb01"
      renderSelectComponent={(props) => <SelectAdapter {...props} />}
      queryEngineEndpoint="https://example.vizzly.co/query-engine"
      identity={getIdentity()}
    />
  );
};

Example.play = async () => {
  const baseCanvas = within(document.body);
  waitForElement('.vizzly_dashboard', async (element) => {
    await openEditor(baseCanvas);
    await screenUpdate(100);
    highlight(baseCanvas.getByLabelText('View'));
    await screenUpdate(100);
  });
};

export const Original: StoryFn = () => {
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

Original.play = async () => {
  const baseCanvas = within(document.body);

  waitForElement('.vizzly_dashboard', async (element) => {
    await openEditor(baseCanvas);
    screenUpdate(100);
    highlight(baseCanvas.getByLabelText('View'));
    await screenUpdate(100);
  });
};

const MySelect: FunctionComponent<{
  name?: string;
  options?: { value: string; label: string }[];
  onChange: (value: { value: string; label: string } | undefined) => void;
  placeholder?: string;
  defaultValue?: string;
  id?: string;
}> = (props) => (
  <div style={selectContainer}>
    <select
      name={props?.name}
      defaultValue={props?.defaultValue ?? 'none'}
      style={select}
      id={props?.id}
      aria-labelledby={props?.id}
      onChange={(e) => {
        const selectedOption = props.options?.find(
          (option) => option.value === e.target.value
        );
        props?.onChange(selectedOption);
      }}
    >
      <option value="none" disabled>
        {props?.placeholder}
      </option>
      {props.options?.map((option, key) => {
        return (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  </div>
);

const SelectAdapter: FunctionComponent<
  VizzlyComponents.ComponentOverrides.Props.Select
> = (props) => (
  <MySelect
    options={
      props?.options?.map(({ label, value }) => ({
        value: Array.isArray(value) ? String(value[0]) : String(value),
        label: typeof label === 'function' ? label() : String(label),
      })) ?? []
    }
    onChange={(option) => {
      props?.onChange(
        option
          ? props?.options.findIndex(
              ({ value, label }) =>
                (Array.isArray(value) ? value[0] : value) === option.value &&
                label === option.label
            )
          : -1
      );
    }}
    defaultValue={props?.options[props.selected ?? 0].value}
    placeholder={props?.placeholder}
    id={props?.id}
  />
);

const root = {
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: 4,
  maxHeight: 28,
  boxShadow:
    'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(64, 68, 82, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(64, 68, 82, 0.08) 0px 2px 5px 0px',
};

const selectContainer = {
  ...root,
  display: 'flex',
};

const select = {
  color: 'rgb(64, 68, 82)',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 20,
  border: 0,
  display: 'inline-flex',
  padding: '4px 12px 4px 8px',
  borderRadius: 4,
  width: '100%',
};
