import { Components } from '../../components';
import { serviceMaps } from './facade';
import notes from './readme.md';

import { embedArgs } from '../../shared/utilities';

// =========================================
// setup
// =========================================

export default {
  title: 'service-name',
  parameters: {
    notes,
  },
  argTypes: {
    service: {
      control: {
        type: 'select',
        options: Object.keys(serviceMaps),
      },
    },
  },
};

const Template = (args: Components.ServiceName) => `<service-name ${embedArgs(args)} ></service-name>`;

// =========================================
// stories
// =========================================

export const Primary = Template.bind({});

Primary.args = {
  service: 'members',
} as Components.ServiceName;
