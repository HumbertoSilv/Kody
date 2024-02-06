import {
  createGlobalTheme,
  createThemeContract
} from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    title: null,
    text: null,
  },
  font: {
    body: null
  }
});

createGlobalTheme(':root', vars, {
  color: {
    primary: "#020817fa",
    secondary: "#e4f9ff",
    title: "#f8fafc",
    text: "#94a3b8",
  },
  font: {
    body: 'Roboto, sans-serif',
  }
});