import React from 'react';
import { useParams } from 'react-router-dom';

import { NoteList, FolderList, AddButton } from '../components';
import { useNotesList } from '../hooks';

export const Notes = () => {
  const { folderId } = useParams();
  const { notes, folders, removeNote } = useNotesList(folderId);

  return (
    <>
      <FolderList folders={folders} />
      <NoteList notes={notes} onRemove={removeNote} />
      <AddButton />
    </>
  );
};