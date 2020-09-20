import React, { useState } from "react";
import { UndoContext } from './UndoContext';

export const UndoProvider = ({ children }) => {
  const [undos, setUndos] = useState([]);

  const removeFromUndos = (timerId) => {
    setUndos(prev => {
      return prev.filter(undo => undo.id !== timerId);
    });
  };

  const makeUndo = (newUndo) => {
    const timerDelay = 3000;
    const animationDelay = 300;
    const startTimeMS = (new Date()).getTime();

    const timerId = setTimeout(() => {
      newUndo.onDo();
      removeFromUndos(timerId);
    }, timerDelay + animationDelay);

    const cancel = () => {
      newUndo.onUndo();
      clearTimeout(timerId);
      removeFromUndos(timerId);
    };

    const percentage = (partialValue, totalValue) => {
      return Math.round((100 * partialValue) / totalValue);
   }

    const getProgress = () => {
      const remainingTime = timerDelay - ((new Date()).getTime() - startTimeMS);
      return percentage(timerDelay - remainingTime, timerDelay);
    };

    const undo = {
      message: newUndo.message,
      id: timerId,
      getProgress,
      cancel,
    };

    setUndos(prev => [...prev, undo]);
  };

  return (
    <UndoContext.Provider 
      children={children}
      value={{
        makeUndo,
        undos,
      }}
    />
  );
};