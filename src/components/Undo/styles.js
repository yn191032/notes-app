import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1400,
    left: 8,
    right: 8,
    bottom: 8,
  },
  item: {
    width: '100%',
    position: 'static',
    marginTop: 8
  },
  progress: {
    marginRight: 16
  },
});