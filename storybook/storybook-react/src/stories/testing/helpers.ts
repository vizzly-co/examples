import { userEvent, within } from '@storybook/testing-library';
import { screenUpdate } from './utils';

export async function openEditor(baseCanvas: any) {
  const addViewButton = baseCanvas.getAllByText('+ Add View')[0];
  userEvent.click(addViewButton);

  await screenUpdate();
}

export async function selectTab(
  baseCanvas: any,
  tab: 'Data' | 'Format' | 'Add-ons'
) {
  const tabs = within(
    document.body.querySelector('[role="tablist"]') as HTMLElement
  );

  const formatTab = tabs.getByText('Format');

  userEvent.click(formatTab);
  await screenUpdate();
}

export async function selectView(
  baseCanvas: any,
  view: 'Single stat' | 'Line Chart'
) {
  const select = baseCanvas.getByLabelText('View');
  userEvent.click(select);
  const selectOption = baseCanvas.getByText(view);
  userEvent.click(selectOption);
}

export async function selectDataSet(baseCanvas: any, value: string) {
  const select = baseCanvas.getByLabelText('Dataset');
  userEvent.click(select);
  const option = baseCanvas.getByText(value);
  userEvent.click(option);
  await screenUpdate();
}

export async function addMetric(baseCanvas: any, value: string) {
  const addCustomMetric = baseCanvas.getByText('+ Add metric');
  userEvent.click(addCustomMetric);
  await screenUpdate();

  const addItem = baseCanvas.getAllByText(value);
  userEvent.click(addItem[0]);
  await screenUpdate();
}

export function findAncestorWithRole(
  el: { getAttribute: (arg0: string) => any; parentElement: any },
  role: any
) {
  while (el && el.getAttribute('role') !== role) {
    el = el.parentElement;
  }
  return el;
}

export const openAdvancedOptions = async (baseCanvas: any) => {
  const accordion = baseCanvas.getByText('Advanced Options');
  userEvent.click(accordion);
  await screenUpdate();
};

export async function updateAdvancedFilters(baseCanvas: any) {
  await screenUpdate();
  const operatorInput = baseCanvas.getByLabelText('Operator');
  userEvent.click(operatorInput);
  await screenUpdate();
  const equalTo = baseCanvas.getByText('Equal to');
  userEvent.click(equalTo);

  const valueInput = baseCanvas.getByLabelText('Value');
  userEvent.type(valueInput, '100');

  const addOr = baseCanvas.getByText('Add "OR"');
  userEvent.click(addOr);

  const selectOrField = baseCanvas.getAllByLabelText('Field')[2];
  userEvent.click(selectOrField);
  await screenUpdate();
  const status = baseCanvas.getByText('Status');
  userEvent.click(status);
  await screenUpdate();
  const selectOrOperator = baseCanvas.getAllByLabelText('Operator')[2];
  userEvent.click(selectOrOperator);
  await screenUpdate();
  const selectOrEqualTo = baseCanvas.getAllByText('Equal to')[1];
  userEvent.click(selectOrEqualTo);
  await screenUpdate();
  const selectOrValue = baseCanvas.getAllByLabelText('Value')[2];
  userEvent.click(selectOrValue);
}

export async function getCustomMetric(baseCanvas: any) {
  const addCustomMetric = baseCanvas.getByText('+ Add custom metric');
  userEvent.click(addCustomMetric);
}

export function selectLocalFilter(
  baseCanvas: { getAllByLabelText: (arg0: string) => any },
  viewPosition: number
) {
  const secondView = baseCanvas.getAllByLabelText('Show Local Filter');
  userEvent.click(secondView[viewPosition]);
}

export function openSelectByText(
  baseCanvas: { getByText: (arg0: string) => any },
  value: string
) {
  const selectAnOption = baseCanvas.getByText(value);
  userEvent.click(selectAnOption);
}

export async function pickASelectOption(
  baseCanvas: { getByText: (arg0: string) => any },
  value: string
) {
  await screenUpdate();
  const fOption = baseCanvas.getByText(value);
  userEvent.click(fOption);
}

export function waitForElement(selector: any, callback: (arg0: any) => void) {
  const observer = new MutationObserver((mutationsList) => {
    const element = document.querySelector(selector);
    if (element) {
      observer.disconnect(); // Stop observing mutations once the element is found
      callback(element);
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}
