import type { Theme } from 'theme-ui';

export const links: Theme['links'] = {
  nav: {
    px: 2,
    py: 1,
    fontWeight: 'normal',
    '&.active': {
      color: 'primary',
      fontWeight: 'bold',
    },
  },
};
