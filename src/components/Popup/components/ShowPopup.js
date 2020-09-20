import React from 'react';
import { useGetParam } from 'hooks';
import { popups } from '../constants';

export const ShowPopup = () => {
  const popupName = useGetParam('popup');
  const Popup = popups[popupName];

  if (!Popup) {
    return null;
  }

  return (
    <Popup open={Boolean(popupName)} />
  );
};
