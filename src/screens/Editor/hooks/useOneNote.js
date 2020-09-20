import { useEffect, useState } from 'react';

import { useNoteContext } from 'contexts';

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
    if (!noteId) {
      return;
    }
    
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