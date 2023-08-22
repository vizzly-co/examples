import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/preset-typescript',
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  managerHead: (head) => `
    ${head}
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    ></link>
  `,
};
export default config;
