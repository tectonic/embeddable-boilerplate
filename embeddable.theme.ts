import '@fontsource/cinzel';
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
      kpi: {
        alignment: 'left',
      },
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
      family: 'cinzel',
    },
    isParent: false,
  });
  return theme;
};

export default themeProvider;
