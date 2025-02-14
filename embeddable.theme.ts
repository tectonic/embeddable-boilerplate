import { mergician } from 'mergician';
import { Theme } from 'vanilla-components';

const themeProvider = (clientContext: any, parentTheme: Theme): any => {
  console.log('theme provider invoked - client');
  const theme = mergician(parentTheme, {
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
    isParent: false,
  });
  return theme;
};

export default themeProvider;
