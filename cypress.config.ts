import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';
import codeCoverage from '@cypress/code-coverage/use-babelrc';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('file:preprocessor', codeCoverage);
      config.env.codeCoverage = true;
      return config;
    },
  },
});
