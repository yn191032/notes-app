import React from 'react';
import { useParams } from 'react-router-dom';

import { NoteList } from '../NoteList';
import { FolderList } from '../FolderList';
import { AddButton } from '../AddButton';

import { useNotesList } from '../../hooks/useNotesList';

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