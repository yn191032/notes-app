import React from 'react';
import { Link } from 'react-router-dom';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { useStyles } from './styles';

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