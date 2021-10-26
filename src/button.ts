import { Theme } from 'theme-ui';

const focusButton = {
  borderColor: 'secondary',
  backgroundColor: 'secondary',
};

const primaryButton = {
  '&:focus': focusButton,
  backgroundColor: 'lightGreen',
  color: 'text',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  outline: 'none',
  gap: 2,
  px: [2, 3],
  py: 2,
  fontSize: 1,
};

export const buttons: Theme['buttons'] = {
  primary: {
    ...primaryButton,
    '&:disabled': {
      backgroundColor: 'secondary',
      color: 'primary',
      cursor: 'default',
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
      cursor: 'default',
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
      cursor: 'default',
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
      cursor: 'default',
    },
  },
  secondary: {
    ...primaryButton,
    backgroundColor: 'primary',
    color: 'background',
    '&:disabled': {
      backgroundColor: 'lightGreen',
      color: 'secondary',
      cursor: 'default',
    },
  },
  warn: {
    ...primaryButton,
    backgroundColor: 'warn',
    color: 'text',
    '&:focus': {
      ...focusButton,
      backgroundColor: 'lightYellow',
    },
    '&:disabled': {
      backgroundColor: 'lightYellow',
      color: 'secondary',
      cursor: 'default',
    },
  },
  danger: {
    ...primaryButton,
    backgroundColor: 'danger',
    color: 'text',
    '&:focus': {
      ...focusButton,
      backgroundColor: 'red',
    },
    '&:disabled': {
      backgroundColor: 'lightRed',
      color: 'secondary',
      cursor: 'default',
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
