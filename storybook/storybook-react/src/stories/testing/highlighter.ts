const BORDER_STYLES = '4px solid #1DB954';

export function getAndHighlightItem(
  element: HTMLElement,
  querySelector: string
) {
  const interval = setInterval(() => {
    const elements = element?.querySelector(querySelector) as HTMLElement;
    if (elements) {
      clearInterval(interval);

      elements.style.border = BORDER_STYLES;
      elements.style.borderRadius = '8px';
      elements.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, 100);
}

export function highlightAndFocus(element: HTMLElement) {
  const interval = setInterval(() => {
    if (element) {
      clearInterval(interval);

      element.style.border = BORDER_STYLES;
      element.style.borderRadius = '8px';
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, 100);
}
export function highlight(element: HTMLElement) {
  if (element) {
    element.style.border = BORDER_STYLES;
    element.style.borderRadius = '8px';
  }
}
