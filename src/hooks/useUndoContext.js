import React, { 
  useState, 
  useContext,
  createContext, 
} from "react";

const UndoContext = createContext();

export const UndoProvider = ({ children }) => {
  const [undos, setUndos] = useState([]);

  const removeFromUndos = (timerId) => {
    setUndos(prev => {
      return prev.filter(undo => undo.id !== timerId);
    });
  };

  const push = (newUndo) => {
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
      cancel,
      getProgress,
    };

    setUndos(prev => [...prev, undo]);
  };

  const getAll = () => {
    return undos;
  };

  return (
    <UndoContext.Provider 
      children={children}
      value={{
        push,
        getAll,
      }}
    />
  );
};

export const useUndo = () => {
  const ctx =  useContext(UndoContext);

  if (ctx === undefined) {
    throw new Error('Undo Context must be used within UndoProvider');
  }
  return ctx;
};