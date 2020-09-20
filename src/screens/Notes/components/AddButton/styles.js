import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  button: {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    right: 35,
    bottom: 35,
  },
}));