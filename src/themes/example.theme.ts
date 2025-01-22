import { ThemePartial } from 'vanilla-components';

/* This example theme only changes a handful of possible theme values. For a full list of
 * possible values, see the Theme and ThemePartial types in vanilla-components. */
const exampleTheme: ThemePartial = {
  brand: {
    primary: '#008348',
    secondary: '#BA9653',
  },
  charts: {
    colors: [
      '#c5fae2',
      '#7ef2be',
      '#2ce391',
      '#00cc70',
      '#009954',
      '#008348',
      '#006638',
      '#004d2a',
    ],
  },
  font: {
    family: 'impact',
  },
};

export default exampleTheme;
