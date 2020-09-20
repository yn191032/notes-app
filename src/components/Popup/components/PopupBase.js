import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
  Dialog,
  Slide,
  Container,
  DialogContent
} from '@material-ui/core';

import { useStyles } from '../styles';

const Transition = React.forwardRef((props, ref) => 
  <Slide direction='up' ref={ref} {...props} />
);

export const PopupBase = ({ open, children }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={history.goBack}
      TransitionComponent={Transition}
    >
      <DialogContent className={classes.popupContent}>
        <Container>
          { children }
        </Container>
      </DialogContent>
    </Dialog>
  );
};