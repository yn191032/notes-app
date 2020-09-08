import React from "react";
import { 
  Button,
  TextField
} from "@material-ui/core";

import { PopupBase } from './PopupBase';

export const RenameFolder = ({ open }) => {
  return (
    <PopupBase open={open} title='Rename the folder'>
      <TextField 
        label='Enter new name'
        autoFocus
        type='text'
        fullWidth
      />
      <Button 
        disableElevation
        variant='contained'
        color='primary'
        onClick={f=>f}
      >
        Rename
      </Button>
    </PopupBase>
  );
};