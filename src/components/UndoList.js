import React, { useEffect } from 'react';

import {
  Snackbar,
  Button,
  IconButton,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { useUndo } from '../hooks';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1400,
    left: 8,
    right: 8,
    bottom: 8,
  },
  item: {
    width: '100%',
    position: 'static',
    marginTop: 8
  },
  progress: {
    marginRight: 16
  },
});

export const Undo = ({ message, cancelAction, getProgress }) => {
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
            color='primary'
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
            color="primary" 
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

export const UndoList = () => {
  const classes = useStyles();
  const { getAll } = useUndo();
  
  return(
    <div className={classes.list}>
      {getAll().map(undo => 
        <Undo 
          key={undo.id} 
          message={undo.message} 
          cancelAction={undo.cancel} 
          getProgress={undo.getProgress}
        />
      )}
    </div>
  );
};