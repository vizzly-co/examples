import type { Preview } from '@storybook/react';
import './storybook.css';

const preview: Preview = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

export default preview;
