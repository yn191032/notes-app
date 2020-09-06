import React from 'react';

import { 
  Button, makeStyles, Container 
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}));

export const AddButton = ({ title = 'Add', ...restProps }) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.container}
      fixed
    >
      <Button
        fullWidth
        disableElevation
        color='primary'
        variant='contained'
        startIcon={<AddIcon />}
        {...restProps}
      >
        { title }
      </Button>
    </Container>
  );
};