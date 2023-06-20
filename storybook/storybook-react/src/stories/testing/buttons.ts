export function findButtonByText(text: string): HTMLButtonElement | null {
  const buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    if (button && button.textContent && button.textContent.includes(text)) {
      return button;
    }
  }
  return null;
}

export function findButtonsByText(text: string): HTMLButtonElement[] {
  const buttons = document.getElementsByTagName('button');
  const matchingButtons: HTMLButtonElement[] = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button && button.textContent && button.textContent.includes(text)) {
      matchingButtons.push(button);
    }
  }
  return matchingButtons;
}

export function findLIButtonByText(text: string): HTMLLIElement | null {
  const allLiElements = document.getElementsByTagName('li');
  for (var i = 0; i < allLiElements.length; i++) {
    if (allLiElements[i].innerText.includes('Edit')) {
      return allLiElements[i];
    }
  }
  return null;
}
