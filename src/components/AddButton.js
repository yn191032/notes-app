import React from 'react';
import { Link } from 'react-router-dom';

import { 
  makeStyles, 
  Fab,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    right: 35,
    bottom: 35,
  },
}));

export const AddButton = () => {
  const classes = useStyles();

  return (
    <Fab 
      color="primary" 
      className={classes.button}
      component={Link}
      to='/notes/new'
    >
      <AddIcon />
    </Fab> 
  );
};