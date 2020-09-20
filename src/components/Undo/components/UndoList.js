import React from 'react';

import { useUndo } from 'contexts';
import { UndoItem } from './Undo';
import { useStyles } from '../styles';

export const UndoList = () => {
  const classes = useStyles();
  const { undos } = useUndo();

  return(
    <div className={classes.list}>
      {
        undos.map(undo => 
          <UndoItem 
            key={undo.id} 
            message={undo.message} 
            cancelAction={undo.cancel} 
            getProgress={undo.getProgress}
          />
        )
      }
    </div>
  );
};