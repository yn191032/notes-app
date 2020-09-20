import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#fff',
    overflow: 'scroll',
    padding: 16,
    paddingBottom: 22,
  },
  inner: {
    display: 'flex',
  },
  item: {
    paddingRight: 12,
  },
  addIcon: {
    width: 20, 
    paddingLeft: 5,
  },
  itemIcon: {
    width: 16, 
    paddingLeft: 5,
  },
  itemMenuIcon: {
    width: 22, 
    paddingLeft: 5
  },
}));