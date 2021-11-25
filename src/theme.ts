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
  borderWidths: [0, 2],
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
      borderRadius: 3,
      p: 4,
    },
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 74],
  fontWeights: {
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    headline: {
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 9,
      py: 3,
    },
    heading: {
      lineHeight: 'heading',
      fontWeight: 'light',
      fontSize: 7,
      py: 3,
    },
    smallHeadline: {
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 6,
      py: 2,
    },
    tinyHeading: {
      lineHeight: 'heading',
      fontWeight: 'light',
      fontSize: 4,
      py: 2,
    },
    tinyHeadline: {
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      py: 2,
    },

    paragraph: {
      my: 2,
    },
    block: {
      variant: 'paragraph',
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
      borderRadius: 4,
      py: 1,
      px: 2,
      bg: 'lightGreen',
      color: 'text',
      fontWeight: 'body',
    },
    secondary: {
      border: '3px solid',
      borderColor: 'secondary',
      borderRadius: 4,
      py: 1,
      px: 2,
      bg: 'background',
      color: 'primary',
      fontWeight: 'body',
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
