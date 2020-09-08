import React from 'react';
import { useGetParam } from '../hooks';
import { CreateFolder } from './popups/CreateFolder';
import { RenameFolder } from './popups/RenameFolder';
import { ChooseFolder } from './popups';

const POPUPS = {
  'create-folder': CreateFolder,
  'rename-folder': RenameFolder,
  'choose-folder': ChooseFolder,
};

export const GlobalPopup = () => {
  const popupName = useGetParam('popup');
  const Popup = POPUPS[popupName];

  if (!Popup) {
    return null;
  }

  return (
    <Popup open={Boolean(popupName)} />
  );
};
