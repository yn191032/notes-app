import React from 'react';
import { useParams } from 'react-router-dom';

import { NoteList, FolderList, AddButton } from '../components';
import { useNotes, useFolders } from '../hooks';

export const Notes = () => {
  const { folderId } = useParams();
  const { folders } = useFolders();
  const { notes , removeNote } = useNotes(folderId);

  return (
    <>
      <FolderList folders={folders} />
      <NoteList notes={notes} onRemove={removeNote} />
      <AddButton />
    </>
  );
};