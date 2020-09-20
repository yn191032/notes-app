import { useContext } from "react";
import { UndoContext } from './UndoContext';

export const useUndo = () => {
  const ctx =  useContext(UndoContext);

  if (ctx === undefined) {
    throw new Error('Undo Context must be used within UndoProvider');
  }
  return ctx;
};