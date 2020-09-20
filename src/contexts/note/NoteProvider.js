import React, { useEffect, useState } from 'react';

import { NoteContext } from './NoteContext';
import { useUndo } from 'contexts';

import db from 'db';

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const { makeUndo } = useUndo();

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    setNotes(await db.notes.list());
  };
  
  const removeNote = (noteId) => {
    setNotes(
      notes.filter(note => note.id !== Number(noteId))
    );
    makeUndo({
      message: `Note(#${noteId}) removed.`,
      onDo: async () => await db.notes.remove(noteId),
      onUndo: () => refresh(),
    });
  };

  const createNote = async () => {
    const note = await db.notes.createOne();
    refresh();
    return note;
  };
  
  const updateNote = async (noteId, values) => {
    const note = await db.notes.update(noteId, values);
    refresh();
    return note;
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        removeNote,
        createNote,
        updateNote,
      }}
      children={children}
    />
  );
};