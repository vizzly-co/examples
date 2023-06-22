const BORDER_STYLES = '4px solid #1DB954';

export function getAndHighlightItem(
  element: HTMLElement,
  querySelector: string
) {
  const interval = setInterval(() => {
    const elements = element?.querySelector(querySelector) as HTMLElement;
    if (elements) {
      clearInterval(interval);

      elements.style.outline = BORDER_STYLES;
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

      element.style.outline = BORDER_STYLES;
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
    element.style.outline = BORDER_STYLES;
  }
}
