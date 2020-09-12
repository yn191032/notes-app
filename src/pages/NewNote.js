import React from 'react';
import { Redirect } from 'react-router-dom';
import { useNote } from '../hooks';

export const NewNote = () => {
  const { note } = useNote();
  
  return ( 
    note.id ? <Redirect to={`/notes/${note.id}`} /> : 'Error'
  );
};