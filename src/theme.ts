import { buttons } from './button';

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, "Public Sans", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  layout: {
    container: {
      maxWidth: 'container', // ['container', null, 'container'],
      width: '100%',
      mx: 'auto',
      px: 3,
    },
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
  buttons,
  containers: {
    small: {
      width: 705,
    },
  },
  sizes: {
    container: 1205,
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
  alerts: {
    success: {
      color: 'text',
      bg: 'lightGreen',
      fontWeight: 'body',
      p: 4,
      borderRadius: '8px',
    },
    error: {
      color: 'text',
      bg: 'lightRed',
      fontWeight: 'body',
      p: 4,
      borderRadius: '8px',
    },
    warning: {
      color: 'text',
      bg: 'accent',
      fontWeight: 'body',
      borderRadius: '8px',
      p: 4,
    },
    muted: {
      color: 'text',
      bg: 'muted',
      fontWeight: 'body',
      p: 4,
      borderRadius: '8px',
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
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      a: { variant: 'styles.link' },
    },
    link: {
      color: 'inherit',
    },
    h1: {
      variant: 'text.heading',
      color: 'primary',
      fontSize: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      background: 'secondary',
      fontFamily: 'monospace',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderSpacing: '0 15px',
    },
    th: {
      borderBottomStyle: 'solid',
    },
    td: {
      borderBottomStyle: 'solid',
    },
    hr: {
      my: 4,
      borderBottom: '2px dashed',
      color: 'primary',
    },
  },
};

export default theme;
