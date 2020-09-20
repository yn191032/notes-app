import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  icon: {
    margin: 5
  },
  toolbar: {
    minHeight: 45
  },
  input: {
    position: 'absolute',
    top: 56,
    bottom: 0,
    padding: theme.spacing(2),
    alignItems: 'baseline',
  },
  folder: {
    margin: 5,
    marginLeft: 'auto',
  },
  rendered: {
    width: '100%',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 56,
    bottom: 0,
    padding: theme.spacing(2),
  },
}));