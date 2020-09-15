import React, { createContext, useContext, useEffect, useState } from 'react';
import db from '../db';
import { useUndo } from './useUndoContext';

const Context = createContext();

export const useNotesList = (folder) => {
  const { notes, removeNote } = useNoteContext();
  const [state, setState] = useState({
    folders: [],
    filteredNotes: [],
  });

  useEffect(() => {
    console.log('useNotesList first update');
  }, []);

  useEffect(() => {
    console.log('useNotesList updated');
    const refresh = async () => {
      const folders = [...new Set( notes.map(note => note.folder))];
      const filteredNotes = folder
          ? notes.filter(note => note.folder === folder)
          : notes;
      setState({ folders, filteredNotes });
    };
    refresh();

  }, [notes, folder]);

  return {
    notes: state.filteredNotes,
    folders: state.folders,
    removeNote,
  };
};

const noteCapture = {
  content: '*Tap to create a note...*',
};

export const useOneNote = (noteId) => {
  const [note, setNote] = useState({});
  const { notes, updateNote, removeNote, createNote } = useNoteContext();
  const [lastContent, setLastContent] = useState('');
  useEffect(() => {
    console.log('useOneNote first update');
  }, []);

  useEffect(() => {
    console.log('useOneNote updated');

    const currentNote = notes.find(note => note.id === Number(noteId));

    (noteId && currentNote)
      ? setNote(currentNote)
      : setNote(noteCapture)

  }, [noteId, notes]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lastContent !== note.content) {
        updateNote(noteId, { content: note.content });
        setLastContent(note.content);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [note]);

  const updateNoteContent = (content) => {
    setNote({ ...note, content });
  };

  const updateNoteFolder = (folder) => {
    updateNote(noteId, { folder })
  };

  const removeThisNote = () => {
    removeNote(noteId);
  };

  const createNewNote = async () => {
    const note = await createNote();
    return note;
  };
  
  return {
    note,
    updateNoteContent,
    updateNoteFolder,
    removeNote: removeThisNote,
    createNote: createNewNote,
  };
};

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const { makeUndo } = useUndo();

  useEffect(() => {
    console.log('<NoteContext> rendered');
  });

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
    <Context.Provider
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

export const useNoteContext = () => {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error('Note Context must be used within NoteProvider');
  }

  return ctx;
};