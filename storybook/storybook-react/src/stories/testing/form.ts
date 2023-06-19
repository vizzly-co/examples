import { userEvent } from '@storybook/testing-library';
import { screenUpdate } from './utils';

export function getFieldsetFromLegend(
  baseCanvas: any,
  value: string
): HTMLFieldSetElement {
  let component = baseCanvas.getByText(value);

  while (component && component !== document.body) {
    if (component.tagName.toLowerCase() === 'fieldset') {
      return component as HTMLFieldSetElement;
    }
    component = component.parentElement;
  }
  throw new Error('No fieldset element found');
}

export async function selectOption(
  baseCanvas: any,
  label: string,
  option: string
) {
  const select = baseCanvas.getByLabelText(label);

  userEvent.click(select);
  const dropdownOption = baseCanvas.getByText(option);
  userEvent.click(dropdownOption);
  await screenUpdate();
}

export async function enterText(baseCanvas: any, label: string, value: string) {
  const input = baseCanvas.getByLabelText(label);

  userEvent.clear(input);
  userEvent.type(input, value);
}
