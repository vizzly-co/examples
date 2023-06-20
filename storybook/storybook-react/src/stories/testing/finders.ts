export function getDataComponent(fieldset: HTMLFieldSetElement) {
  return fieldset?.querySelector('[data-component="dropdown"]') as HTMLElement;
}
