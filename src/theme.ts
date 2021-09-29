import { alerts } from './alerts';
import { buttons } from './button';
import { layout } from './layout';
import { styles } from './styles';

export const theme = {
  sizes: {
    container: 1205,
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 4, 6, 8, 16, 32],
  fonts: {
    body: 'system-ui, -apple-system, "Public Sans", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  boxes: {
    form: {
      border: '2px solid',
      borderColor: 'primary',
      p: 3,
      borderRadius: 8,
      my: 3,
    },
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
  containers: {
    small: {
      width: 705,
    },
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#0A1026',
    background: '#fff',
    primary: '#004D3F',
    secondary: '#749F97',
    accent: '#F9B644',
    muted: '#F0F4F3',
    lightGray: '#F7FBFA',
    lightRed: '#FFC7C7',
    lightGreen: '#C5E7E0',
    danger: '#E96565',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'primary',
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
  styles,
  alerts,
  layout,
  buttons,
};

export default theme;
