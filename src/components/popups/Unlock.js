import React from 'react';
import { 
  TextField,
  Button,
} from '@material-ui/core';

import { PopupBase } from './PopupBase';

export const Unlock = ({ match }) => {
  return (
    <PopupBase open={Boolean(match)} title='Unlock the note'>
      <TextField 
        autoFocus
        fullWidth
        label='Enter the key'
        type='text'
      />
      <Button onClick={f=>f}>Unlock</Button>
    </PopupBase>
  );
};