import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*", disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      disable: true
    },
  },
};

export default preview;
