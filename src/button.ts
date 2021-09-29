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

export const buttons = {
  primary: primaryButton,
  outline: {
    ...primaryButton,
    background: 'none',
    borderColor: 'primary',
    border: '2px solid',
  },
  small: {
    ...primaryButton,
    fontSize: 1,
    p: 2,
    py: 1,
  },
  link: {
    ...primaryButton,
    color: 'inherit',
    background: 'none',
    textDecoration: 'underline',
    border: 0,
    m: 0,
    p: 0,
  },
  secondary: {
    ...primaryButton,
    backgroundColor: 'primary',
    color: 'background',
  },
  warn: {
    ...primaryButton,
    backgroundColor: 'warn',
    color: 'text',
  },
  danger: {
    ...primaryButton,
    backgroundColor: 'danger',
    color: 'text',
  },
};
