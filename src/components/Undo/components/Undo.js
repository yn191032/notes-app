import React, { useEffect } from 'react';

import {
  Snackbar,
  Button,
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../styles';

export const UndoItem = ({ message, cancelAction, getProgress }) => {
  const classes = useStyles();
  const timerRef = React.useRef();
  const [open, setOpen] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  const onClickClose = () => {
    setOpen(false);
  };

  const onClickUndo = () => {
    clearInterval(timerRef.current);
    setOpen(true);
    cancelAction();
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const currentProgress = getProgress();
      if (currentProgress >= 100) {
        setOpen(false);
      } else {
        setProgress(currentProgress);
      }
    }, 100);
    return () => clearInterval(timerRef.current);
  }, [getProgress]);

  return (
    <Snackbar
      open={open}
      className={classes.item}
      message={
        <>
          <CircularProgress
            className={classes.progress}
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