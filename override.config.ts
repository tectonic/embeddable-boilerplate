// Ultimately the Theme type and default theme will come from vanilla components
import themes from './src/themes';
import { mergician } from 'mergician';

const overrideProps = (ctx): any => {
  const { default: defaultTheme } = themes;
  const clientTheme: string = ctx.theme; // eg 'github'
  const currentTheme = themes[clientTheme] ? themes[clientTheme] : defaultTheme;
  const finalTheme = mergician(defaultTheme, currentTheme);

  return {
    theme: finalTheme,
  };
};
export default overrideProps;
