import { useContext } from 'react';
import { NoteContext } from './NoteContext';

export const useNoteContext = () => {
  const ctx = useContext(NoteContext);

  if (!ctx) {
    throw new Error('Note Context must be used within NoteProvider');
  }

  return ctx;
};