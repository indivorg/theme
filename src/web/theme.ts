import merge from 'ts-deepmerge';
import { theme } from '../theme';

export const webTheme = merge(theme, {
  buttons: {
    primary: {
      '&:focus': {
        borderColor: 'secondary',
      },
    },
  },
  styles: {
    root: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
});