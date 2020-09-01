import React from 'react';
import { Link } from 'react-router-dom';

import { NoteList, BottomNav, AddButton } from '../components';

import NOTES from '../data/notes';

export const Notes = () => {
  return (
    <>
      <AddButton 
        title='Add a note'
        component={Link}
        to='/notes/new'
      />
      <NoteList notes={NOTES} />
      <BottomNav />
    </>
  );
};