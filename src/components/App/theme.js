import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: '#5e71d0',
  secondary: '#ec6464',
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  overrides: {
    MuiSnackbarContent: {
      message: { 
        display: 'flex',
        alignItems: 'center',
        padding: 0,
      },
    },
    MuiMenu: {
      list: {
        padding: 0,
      }
    },
    MuiMenuItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: 44,
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: 'transparent',
          color: colors.primary,
          fontWeight: 600,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 0,
        paddingRight: 16
      },
    },
    MuiFormControl: {
      root: {
        marginBottom: 16,
      },
    }
  }
});