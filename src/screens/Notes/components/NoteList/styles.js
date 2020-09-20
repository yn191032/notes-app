import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
  },
  item: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
    color: 'rgba(0, 0, 0, 0.8)',
  },
  itemText: {
    margin: 0,
  },
  title: {
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  folder: {
    fontWeight: 600,
    display: 'block',
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  date: {
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  delete: {
    color: 'rgba(0,0,0,0.2)',
  },
  loading: {
    color: 'rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    margin: 16
  },
  noData: {
    textAlign: 'center',
    paddingTop: 6,
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.3)',
  },
  bookIcon: {
    width: 12,
    height: 12
  },
}));