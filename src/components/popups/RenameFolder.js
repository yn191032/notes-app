import React, { useRef } from "react";
import { 
  Button,
  TextField
} from "@material-ui/core";

import { PopupBase } from './PopupBase';
import { useGetParam, useOneNote } from "../../hooks";
import { useHistory } from "react-router-dom";

export const RenameFolder = ({ open }) => {
  const input = useRef();
  const id = useGetParam('id');
  const folder = useGetParam('folder');
  const history = useHistory();
  const { updateNoteFolder } = useOneNote(id);

  const onClick = () => {
    updateNoteFolder(input.current.value);
    history.replace(`/notes/${id}/edit`);
  };
  
  return (
    <PopupBase open={open} title='Rename the folder'>
      <TextField 
        label='New folder name'
        autoFocus
        type='text'
        fullWidth
        inputRef={input}
        defaultValue={folder}
      />
      <Button 
        disableElevation
        variant='contained'
        color='primary'
        onClick={onClick}
      >
        Rename
      </Button>
    </PopupBase>
  );
};