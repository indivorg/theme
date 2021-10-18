import type { Theme, ThemeUIStyleObject } from 'theme-ui';
import { alerts } from './alerts';
import { buttons } from './button';
import { colors } from './colors';
import { layout } from './layout';
import { links } from './links';
import { styles } from './styles';

export interface IndivTheme extends Theme {
  label: ThemeUIStyleObject;
}

export const theme: IndivTheme = {
  sizes: {
    container: 1205,
    readable: 770,
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 4, 6, 8, 16, 32],
  fonts: {
    body: 'system-ui, -apple-system, "Public Sans", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  cards: {
    primary: {
      color: 'text',
      p: [3, 4],
      borderRadius: 'normal',
      overflow: 'hidden',
    },
    secondary: {
      bg: 'muted',
      borderRadius: '5px',
      p: 4,
    },
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 74],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      py: 3,
    },
    block: {
      variant: 'paragraph',
      my: 2,
      textAlign: 'justify',
      textAlignLast: 'start',
      textJustify: 'auto',
    },
  },
  forms: {
    plain: {
      border: 0,
      padding: 0,
      outline: 'none',
    },
  },
  label: {
    fontWeight: 'bold',
    color: 'text',
    fontSize: 1,
  },
  badges: {
    primary: {
      border: '3px solid',
      borderColor: 'secondary',
      borderRadius: '8px',
      py: 1,
      px: 2,
      bg: 'primary',
      color: 'background',
    },
    secondary: {
      border: '3px solid',
      borderColor: 'secondary',
      borderRadius: '8px',
      py: 1,
      px: 2,
      bg: 'background',
      color: 'primary',
    },
  },
  images: {
    rounded: {
      borderRadius: '50%',
    },
  },
  colors,
  styles,
  alerts,
  layout,
  buttons,
  links,
};
