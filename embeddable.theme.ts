import '@fontsource/anton';
import { mergician } from 'mergician';
import { Theme } from 'vanilla-components';

const themeProvider = (clientContext: any, parentTheme: Theme): any => {
  console.log('parentTheme', parentTheme);
  /* Temp - remove this */
  //
  if (clientContext.theme === 'default') {
    return parentTheme;
  }
  //
  /* Temp - remove this */
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
      /* Custom overrides for certain charts */
      bar: {
        borderRadius: 10,
        borderWidth: 0,
        colors: ['#fe76bd', '#cca9fd', '#9faff9'],
        font: {
          size: 12,
        },
      },
      bubble: {
        colors: ['#fcdb6c', '#fcc270', '#f9976c', '#fd746e'],
        font: {
          size: 12,
        },
      },
      kpi: {
        alignment: 'left',
        font: {
          negativeColor: '#FF6B6C',
          size: 32,
        },
      },
      line: {
        colors: ['#bcf879', '#d0e967', '#f5ef54'],
        font: {
          size: 12,
        },
        lineTension: 0.1,
      },
      pie: {
        colors: [
          '#fe76bd',
          '#cca9fd',
          '#9faff9',
          '#77cdf8',
          '#79f0ef',
          '#61f48c',
          '#fcdb6c',
          '#fcc270',
          '#f9976c',
          '#fd746e',
        ],
        font: {
          size: 12,
        },
      },
      /* End custom chart overrides */
    },
    controls: {
      buttons: {
        active: {
          background: '#008348',
          border: '#008348',
          fontColor: '#FFFFFF',
        },
        hovered: {
          background: '#FFFFFF',
          border: '#008348',
          fontColor: '#008348',
        },
        pressed: {
          background: '#FFFFFF',
          border: '#008348',
          fontColor: '#008348',
        },
        fontSize: '12px',
        height: '30px',
        paddingY: '8px',
        paddingX: '16px',
        radius: '0px',
      },
      borders: {
        colors: {
          primary: '#0A0',
        },
        padding: '16px',
        radius: '0px',
      },
      inputs: {
        colors: {
          hover: '#F3F4F6',
          selected: '#F3F4F6',
        },
      },
      tooltips: {
        radius: '0px',
      },
    },
    font: {
      // family: 'Anton',
    },
    isParent: false,
  });
  return theme;
};

export default themeProvider;
