import { useEffect, useState } from 'react';
import { repo } from '../db';

export const useNote = (noteId) => {
  const [note, setNote] = useState({});

  useEffect(() => {
    const getNote = async () => {
      const note = await repo.notes.get(Number(noteId));
      setNote(note);
    };

    const createNote = async () => {
      const note = await repo.notes.create();
      setNote(note);
    };

    if (noteId) {
      getNote();
    } else {
      createNote();
    }
  }, [noteId]);

  return {
    note,
  };
};