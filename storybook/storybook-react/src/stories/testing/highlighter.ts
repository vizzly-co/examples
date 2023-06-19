export function highlightItem(
  element: HTMLFieldSetElement,
  querySelector: string
) {
  const interval = setInterval(() => {
    const elements = element?.querySelector(querySelector) as HTMLElement;
    if (elements) {
      clearInterval(interval);

      elements.style.border = '2px solid blue';
      elements.style.borderRadius = '8px';
      elements.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, 100);
}
