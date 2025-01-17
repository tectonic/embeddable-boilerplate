/*
 * Welcome to Embeddable!
 * You're not limited to our Vanilla Components, when it comes to your dashboard.
 * If you can build it in React, you can put it into Embeddable. The sky's the limit!
 * Here we've put together a simple example component showing the basics of construction.
 * Feel free to modify it, or copy it while creating your own components.
 *
 * Want to learn more? Visit https://docs.embeddable.com
 */
import { Value } from '@embeddable.com/core';
import {
  EmbeddedComponentMeta,
  Inputs,
  defineComponent,
} from '@embeddable.com/react';

import Component from './index';

export const meta = {
  name: 'Example',
  label: 'Example Component',
  defaultWidth: 300,
  defaultHeight: 80,
  category: 'Controls: inputs & dropdowns',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title',
      category: 'Settings',
    },
    {
      name: 'value',
      type: 'string',
      label: 'Initial value',
      category: 'Pre-configured variables',
    },
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      category: 'Settings',
    },
  ],
  events: [
    {
      name: 'onChange',
      label: 'Change',
      properties: [
        {
          name: 'value',
          type: 'string',
        },
      ],
    },
  ],
  variables: [
    {
      name: 'Text Value',
      type: 'string',
      defaultValue: Value.noFilter(),
      inputs: ['value'],
      events: [{ name: 'onChange', property: 'value' }],
    },
  ],
} as const satisfies EmbeddedComponentMeta;

export default defineComponent(Component, meta, {
  props: (inputs: Inputs<typeof meta>) => ({
    ...inputs,
  }),
  events: {
    onChange: (value) => {
      return { value: value || Value.noFilter() };
    },
  },
});
