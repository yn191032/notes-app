import { useState, useEffect, useCallback } from 'react';
import { repo } from '../db';
import { useUndo } from './index';

export const useNotes = (folder) => {
  const [notes, setNotes] = useState(null);
  const { push: pushToUndo } = useUndo();
  
  const refresh = useCallback(async () => {
    if (folder) {
      setNotes(await repo.notes.listOneFolder(folder));
    } else {
      setNotes(await repo.notes.list());
    }
  }, [folder]);

  useEffect(() => {
    refresh();
  }, [refresh]);
  
  const removeNote = async (noteId) => {
    removeNoteFromCache(noteId);
    pushToUndo({
      message: `Note(#${noteId}) removed.`,
      onDo: async () => await repo.notes.remove(noteId),
      onUndo: refresh,
    });
  };

  const removeNoteFromCache = (noteId) => {
    setNotes(
      notes.filter(note => note.id !== noteId)
    );
  };

  return {
    notes,
    removeNote,
  };
};