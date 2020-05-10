import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';
import './fonts/Quicksand.ttf'
import './fonts/Montserrat.ttf'
import './fonts/Montserrat-Light.ttf'

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#FFFFFF'
    },
    secondary:
    {
        main: '#C4E0F9'
    }
  },
  overrides: {
    MuiButton: {
      text: {
        'text-transform': 'none',
      },
    },
  },
});

export default theme;
