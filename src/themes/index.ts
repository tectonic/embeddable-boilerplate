import exampleTheme from './example.theme';
import { defaultTheme } from 'vanilla-components';

// This object is used in override.config.ts so that you don't have to import every single
// theme in that file.
export default {
  example: exampleTheme,
  default: defaultTheme,
};
