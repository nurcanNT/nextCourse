import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E8B57', // Yeşil ton
    },
    secondary: {
      main: '#3CB371',
    },
  },
  typography: {
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
  },
});

export default theme;
