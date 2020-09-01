import React from "react";

import { 
  Dialog, 
  DialogContent, 
  DialogActions,
  Button,
  TextField
} from "@material-ui/core";

import { PopupBase } from './PopupBase';

export const CreateKey = ({ open }) => {
  return (
    <PopupBase open={open} title='Create a new key'>
      <TextField 
        label='New key'
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
        Create
      </Button>
    </PopupBase>
  );
};