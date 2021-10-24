import type { Theme } from 'theme-ui';
const primaryButton = {
  '&:focus': {
    borderColor: 'secondary',
  },
  backgroundColor: 'lightGreen',
  color: 'text',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  outline: 'none',
  gap: 2,
};

export const buttons: Theme['buttons'] = {
  primary: {
    ...primaryButton,
    '&:disabled': {
      backgroundColor: 'secondary',
      color: 'primary',
    },
  },
  outline: {
    ...primaryButton,
    background: 'none',
    borderColor: 'primary',
    borderWidth: 2,
    borderStyle: 'solid',
    '&:disabled': {
      borderColor: 'secondary',
      color: 'secondary',
    },
  },
  small: {
    ...primaryButton,
    fontSize: 1,
    p: 2,
    py: 1,
    '&:disabled': {
      backgroundColor: 'lightGreen',
      color: 'secondary',
    },
  },
  link: {
    ...primaryButton,
    color: 'inherit',
    background: 'none',
    textDecoration: 'underline',
    border: 0,
    m: 0,
    p: 0,
    '&:disabled': {
      color: 'lightGreen',
    },
  },
  secondary: {
    ...primaryButton,
    backgroundColor: 'primary',
    color: 'background',
    '&:disabled': {
      backgroundColor: 'lightGreen',
      color: 'secondary',
    },
  },
  warn: {
    ...primaryButton,
    backgroundColor: 'warn',
    color: 'text',
    '&:disabled': {
      backgroundColor: 'lightYellow',
      color: 'secondary',
    },
  },
  danger: {
    ...primaryButton,
    backgroundColor: 'danger',
    color: 'text',
    '&:disabled': {
      backgroundColor: 'lightRed',
      color: 'secondary',
    },
  },
  unstyled: {
    ...primaryButton,
    color: 'inherit',
    background: 'none',
    textDecoration: 'none',
    border: 0,
    m: 0,
    p: 0,
  },
};
