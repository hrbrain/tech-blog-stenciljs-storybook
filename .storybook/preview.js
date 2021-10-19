const { configure } = require('@storybook/html');
const loader = require('../loader/index.cjs.js');

function loadWebComponents() {
  loader.defineCustomElements(window);
}

configure(loadWebComponents, module);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
