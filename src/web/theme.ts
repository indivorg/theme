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
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
  },
});