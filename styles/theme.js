import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00cdac',
    },
    secondary: {
      main: '#fff',
    },
    cadangan: {
        main: 'black'
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;