import {
  createGlobalTheme,
  createThemeContract
} from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    textPrimary: null,
    textSecondary: null,

    backgroundPrimary: null,
    backgroundSecondary: null,


    white: null,
  },
  font: {
    primary: null
  }
});

createGlobalTheme(':root', vars, {
  color: {
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',

    backgroundPrimary: '#020817',
    backgroundSecondary: '#1e293b',


    white: '#ffffff',

  },
  font: {
    primary: 'Roboto, sans-serif',
  }
});