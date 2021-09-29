const primaryButton = {
  '&:focus': {
    borderColor: 'secondary',
  },
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
    border: '2px solid',
    borderColor: 'white',
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
    background: 'none',
    borderColor: 'primary',
    border: '2px solid',
    color: 'primary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: 'background',
    borderRadius: '8px',
  },
  danger: {
    ...primaryButton,
    backgroundColor: 'danger',
    color: 'background',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
