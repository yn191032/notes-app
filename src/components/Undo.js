import React from 'react';

import {
  Snackbar,
  Button,
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

export const Undo = () => {
  const timerRef = React.useRef();
  const [open, setOpen] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const afterFunc = f=>f;
  const message = 'Note deleted.';
  
  const onClickClose = () => {
    setOpen(false);
  };
  
  const onClickUndo = () => {
    clearInterval(timerRef.current);
    setOpen(false);
  };

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setOpen(false);
          afterFunc();
          clearInterval(timerRef.current)
          return 0;
        }
        return prev + 5;
      });
    }, 1000); // k = 200, 5

    return () => clearInterval(timerRef.current);
  }, []);
  
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={f=>f}
      message={
        <>
          <CircularProgress
            style={{marginRight: 16, marginBottom: 5}}
            color='secondary'
            variant="static"
            size={20}
            thickness={4}
            value={progress}
          />
          <span>{message}</span>
        </>
      }
      action={
        <>
          <Button 
            color="secondary" 
            size="small" 
            onClick={onClickUndo}
          >
            <span>UNDO</span>
          </Button>
          <IconButton 
            size="small" 
            aria-label="close" 
            color="inherit" 
            onClick={onClickClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};