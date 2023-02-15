
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#004b82',
      light: '#7dc8ec',
      dark: '#06204f',
    },
    secondary: {
      main: '#7dc8ec',
      dark: '#002e7d',
      light: '#bee5fd',
    },
    error: {
      main: '#ec008c',
    },
    info: {
      main: '#58585b',
    },
    divider: 'rgba(0,0,0,0.18)',
    success: {
      main: '#4caf51',
    },
    warning: {
      main: '#ff9800',
    },
  },
  shape: {
    borderRadius: 4,
  }
});

