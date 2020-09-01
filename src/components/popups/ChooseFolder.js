import React from 'react';
import { Link } from 'react-router-dom';

import { 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@material-ui/core';

import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

import { PopupBase } from './PopupBase';
import FOLDERS from '../../data/folders';

export const ChooseFolder = ({ match }) => {
  return (
    <PopupBase open={Boolean(match)} title='Choose a folder'>
      <List>
        {
          FOLDERS.map(folder => (
            <ListItem 
              key={folder.id} 
              button
            >
              <ListItemIcon>
                {
                  folder.id === 2
                  ? <FolderIcon fontSize='small' /> 
                  : <FolderOpenIcon fontSize='small' />
                }
              </ListItemIcon>
              <ListItemText primary={
                folder.id === 2
                ? <strong>{folder.title}</strong>
                : folder.title
              } />
            </ListItem>
          ))
        }
      </List>
      <Button 
        disableElevation
        variant='contained'
        color='primary'
        component={Link} 
        to={`${match.url}?popup=create-folder`}
      >
        Create new
      </Button>
    </PopupBase>
  );
};