import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';
import themes from './src/themes';

export default defineConfig({
  plugins: [react],
  modelsSrc: './src/embeddable.com/models',
  componentsSrc: './src/embeddable.com/components',
  presetsSrc: './src/embeddable.com/presets',
  errorFallbackComponent:
    './src/embeddable.com/components/util/ErrorHandler.jsx',
  // componentLibraries: [{
  //   name: '@mikhail-terekhov/vanilla-components',
  //   include: ['BarChart', 'DateRangePicker']
  // }],
  componentLibraries: ['vanilla-components'],

  //
  // Uncomment for US deployments
  //
  // previewBaseUrl: 'https://app.us.embeddable.com',
  // pushBaseUrl: 'https://api.us.embeddable.com',

  //
  // Uncomment for EU deployments
  //
  // previewBaseUrl: 'https://app.eu.embeddable.com',
  // pushBaseUrl: 'https://api.eu.embeddable.com',
  // audienceUrl: 'https://auth.eu.embeddable.com',
  // authDomain: 'auth.eu.embeddable.com',
  // authClientId: '6OGPwIQsVmtrBKhNrwAaXhz4ePb0kBGV',
});
