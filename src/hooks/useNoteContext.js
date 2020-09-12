import React, { createContext, useContext } from 'react';
import { repo } from '../db';

const Context = createContext();

export const NoteProvider = ({ children }) => {

  const getNote = async (noteId) => {
    return await repo.notes.get(noteId);
  };

  const createNote = () => {

  };

  const updateNote = () => {

  };

  const deleteNote = () => {

  };

  return (
    <Context.Provider
      value={{
        getNote,
        createNote,
        updateNote,
        deleteNote,
      }}
      children={children}
    />
  );
};

export const useNoteContext = () => {
  const ctx = useContext(Context);

  if (ctx) {
    throw new Error('Note Context must be used within NoteProvider');
  }

  return ctx;
};