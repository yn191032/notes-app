import React from 'react';

import { 
  Button, makeStyles, Container 
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  }
}));

export const AddButton = ({ title = 'Add', ...restProps }) => {
  const classes = useStyles();

  return (
    <Container 
      className={classes.container}
      fixed
    >
      <Button 
        className={classes.button}
        fullWidth 
        startIcon={<AddIcon />}
        {...restProps}
      >
        { title }
      </Button> 
    </Container>
  );
};