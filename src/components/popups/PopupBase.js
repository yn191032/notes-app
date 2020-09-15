import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
  Dialog,
  Slide,
  Container,
  DialogContent,
  makeStyles
} from '@material-ui/core';

const Transition = React.forwardRef((props, ref) => 
  <Slide direction='up' ref={ref} {...props} />
);

const useStyles = makeStyles(() => ({
  popupTitle: {
    position: 'absolute',
  },
  popupContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '40px 20px !important',
  },
}));

export const PopupBase = ({ open, title, children }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Dialog
      // fullScreen
      open={open}
      onClose={history.goBack}
      TransitionComponent={Transition}
    >
      {/* <DialogTitle className={classes.popupTitle}>
        <IconButton
          edge='start'
          color='inherit'
          onClick={history.goBack}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle> */}
      <DialogContent className={classes.popupContent}>
        <Container>
          {/* <h3 className={classes.title}>{ title }</h3> */}
          { children }
        </Container>
      </DialogContent>
    </Dialog>
  );
};