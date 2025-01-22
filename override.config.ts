import { mergician } from 'mergician';

import themes from './src/themes';

const overrideProps = (ctx): any => {
  const { default: defaultTheme } = themes;
  const clientTheme: string = ctx.theme; // eg 'github' or 'example'
  const currentTheme = themes[clientTheme] ? themes[clientTheme] : defaultTheme;
  const finalTheme = mergician(defaultTheme, currentTheme);

  return {
    theme: finalTheme,
  };
};
export default overrideProps;
