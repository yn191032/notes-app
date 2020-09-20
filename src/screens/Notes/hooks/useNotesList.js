import { useEffect, useState } from 'react';
import { useNoteContext } from 'contexts';

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