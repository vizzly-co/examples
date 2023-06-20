export function findButtonByText(text: string): HTMLButtonElement | null {
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button && button.textContent && button.textContent.includes(text)) {
      return button;
    }
  }
  return null;
}

export function findButtonsByText(text: string): HTMLButtonElement[] {
  var buttons = document.getElementsByTagName('button');
  var matchingButtons: HTMLButtonElement[] = [];
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button && button.textContent && button.textContent.includes(text)) {
      matchingButtons.push(button);
    }
  }
  return matchingButtons;
}
