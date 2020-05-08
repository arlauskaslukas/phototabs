import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#FEEAFA'
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
