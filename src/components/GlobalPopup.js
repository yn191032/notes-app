import React from 'react';
import { useGetParam } from '../hooks';
import { CreateFolder } from './popups/CreateFolder';

const POPUPS = {
  'create-folder': CreateFolder,
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
