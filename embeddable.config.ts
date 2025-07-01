import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  plugins: [react],

  // uncomment for EU deployments
  // region: 'EU',

  // uncomment for US deployments
  // region: 'US',

  /* After you've finished the onboarding, you can uncomment the following line to
   * use ALL vanilla components. If you use this, make sure to remove the lower
   * "componentLibraries" line as well, or you'll get an error.
   * /
  // componentLibraries: ['@embeddable.com/vanilla-components'],

  /* If you want to use only specific vanilla components, you have two options:
   *   1. You can use "include" to specify which components you want to use
   *   2. You can use "exclude" to specify which components you want to exclude
   * We're currently including an empty array as this allows you to import the Embeddable container
   * in the sample components without getting theme errors, but doesn't add any of the vanilla components
   */
  componentLibraries: [
    { name: '@embeddable.com/vanilla-components', include: [''] },
  ],

  //For internal use only (this helps us help you debug issues)
  //
  // previewBaseUrl: 'https://app.dev.embeddable.com',
  // pushBaseUrl: 'https://api.dev.embeddable.com',
  // audienceUrl: 'https://api.dev.embeddable.com/',
  // authDomain: 'embeddable-dev.eu.auth0.com',
  // authClientId: 'xOKco5ztFCpWn54bJbFkAcT8mV4LLcpG',
});
