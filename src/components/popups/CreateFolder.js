import React from "react";
import { 
  Button,
  TextField
} from "@material-ui/core";

import { PopupBase } from './PopupBase';

export const CreateFolder = ({ open }) => {
  return (
    <PopupBase open={open} title='Create a new folder'>
      <TextField 
        label='New folder'
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