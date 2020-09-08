import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { FolderList, BottomNav, AddButton } from '../components';

import FOLDERS from '../data/folders';

export const Folders = () => {
  const { url } = useRouteMatch();
  
  return (
    <>
      <AddButton 
        title='Add a folder' 
        component={Link}
        to={`${url}?popup=create-folder`}
      />
      <FolderList folders={FOLDERS} />
      <BottomNav />
    </>
  );
};