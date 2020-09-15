import React from 'react';
import { useGetParam } from '../../hooks';
import { RenameFolder } from './RenameFolder';

const POPUPS = {
  'rename-folder': RenameFolder,
};

export const Popups = () => {
  const popupName = useGetParam('popup');
  const Popup = POPUPS[popupName];

  if (!Popup) {
    return null;
  }

  return (
    <Popup open={Boolean(popupName)} />
  );
};
