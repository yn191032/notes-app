import React, { 
  useState, 
  useEffect, 
  useRef, 
  useContext,
  createContext, 
} from "react";

const UndoContext = createContext();

export const UndoProvider = ({ children }) => {
  const undosRef = useRef([]);
  const [undo, setUndo] = useState(0);
  
  useEffect(() => {
    if (undo){
      undosRef.current = [
        ...undosRef.current,
        undo,
      ];
    }
  }, [undo]);

  const cancel = (undo) => {
    undosRef.current.filter((value) => value === undo);
  };
  
  const fire = (undo) => {
    undo.cb();
    cancel();
  };
  
  const push = (newUndo) => {
    if (!newUndo) {
      throw new Error('useUndo.push: {message, cb} param is necessary');
    }
    setUndo(newUndo);
  };

  const getAll = () => {
    return undosRef.current;
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