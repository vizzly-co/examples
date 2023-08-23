import { moduleMetadata } from '@storybook/angular';
import { VizzlyDashboard } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Getting Started/Dashboard',
  component: VizzlyDashboard,
  decorators: [
    moduleMetadata({
      declarations: [VizzlyDashboard],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
};

export const Default = () => ({
  component: VizzlyDashboard,
  props: {},
});
