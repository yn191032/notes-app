
import { useNoteContext } from 'contexts';

export const useRenameFolder = (noteId) => {
  const { updateNote } = useNoteContext();

  const updateNoteFolder = (folder) => {
    updateNote(noteId, { folder })
  };

  return {
    updateNoteFolder
  };
};