import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  plugins: [react],
  modelsSrc: './src/embeddable.com/models',
  componentsSrc: './src/embeddable.com/components',
  presetsSrc: './src/embeddable.com/presets',
  errorFallbackComponent: './src/embeddable.com/components/util/ErrorHandler',
  componentLibraries: ['vanilla-components'],

  /* Note: if you wish to include only certain components from a library, you can specify
   * them like so:
   *
   * componentLibraries: [{
   *   name: 'vanilla-components',
   *   include: ['BarChart', 'DateRangePicker']
   * }],
   */

  // Uncomment for US deployments
  //
  // previewBaseUrl: 'https://app.us.embeddable.com',
  // pushBaseUrl: 'https://api.us.embeddable.com',

  // Uncomment for EU deployments
  //
  // previewBaseUrl: 'https://app.eu.embeddable.com',
  // pushBaseUrl: 'https://api.eu.embeddable.com',
  // audienceUrl: 'https://auth.eu.embeddable.com',
  // authDomain: 'auth.eu.embeddable.com',
  // authClientId: '6OGPwIQsVmtrBKhNrwAaXhz4ePb0kBGV',

  //
  // For internal use only
  //
  // previewBaseUrl: 'https://app.dev.embeddable.com',
  // pushBaseUrl: 'https://api.dev.embeddable.com',
  // audienceUrl: 'https://api.dev.embeddable.com/',
  // authDomain: 'embeddable-dev.eu.auth0.com',
  // authClientId: 'xOKco5ztFCpWn54bJbFkAcT8mV4LLcpG',
});
