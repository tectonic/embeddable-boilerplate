import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  componentLibraries: ['@embeddable.com/vanilla-components'],
  plugins: [react],
  // uncomment for EU deployments
  region: 'EU',

  // uncomment for US deployments
  // region: 'US',

  /* Note: if you wish to include only certain components from a library, you can specify
   * them like so:
   *
   * componentLibraries: [{
   *   name: '@embeddable.com/vanilla-components',
   *   include: ['BarChart', 'DateRangePicker']
   * }],
   */

  //For internal use only (this helps us help you debug issues)
  //
  // previewBaseUrl: 'https://app.dev.embeddable.com',
  // pushBaseUrl: 'https://api.dev.embeddable.com',
  // audienceUrl: 'https://api.dev.embeddable.com/',
  // authDomain: 'embeddable-dev.eu.auth0.com',
  // authClientId: 'xOKco5ztFCpWn54bJbFkAcT8mV4LLcpG',
});
