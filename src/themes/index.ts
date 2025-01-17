import exampleTheme from './example.theme';
import defaultTheme from './default.theme';

// Note: these types will be imported from Vanilla Components soon
export type ChartType =
  | 'bar'
  | 'line'
  | 'pie'
  | 'doughnut'
  | 'radar'
  | 'polarArea'
  | 'bubble'
  | 'scatter'
  | 'kpi';

export type Theme = {
  brand: {
    primary: string;
    secondary: string;
  };
  charts: {
    colors: string[];
    options: {
      toolTipEnabled: boolean;
      usePointStyle: boolean;
    };
  } & {
    [key in ChartType]?: any;
  };
  dateFormats: {
    year: string;
    quarter: string;
    month: string;
    day: string;
    week: string;
    hour: string;
    minute: string;
    second: string;
  };
  font: {
    color: string;
    family: string;
    size: number;
  };
};

type ThemeDeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? ThemeDeepPartial<T[P]> : T[P];
};

export type ThemePartial = ThemeDeepPartial<Theme>;

// Note: this object is the only thing that index.ts will actually export, ultimately
// It's used in override.config.ts so that you don't have to import every single theme
// in that file.
export default {
  example: exampleTheme,
  default: defaultTheme,
};
