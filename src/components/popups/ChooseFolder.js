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
import AddIcon from '@material-ui/icons/Add';

import { PopupBase } from './PopupBase';
import FOLDERS from '../../data/folders';

export const ChooseFolder = ({ match }) => {
  return (
    <PopupBase open={Boolean(match)} title='Choose a folder'>
      <Button 
        fullWidth 
        color='primary'
        variant='contained'
        disableElevation
        startIcon={<AddIcon />}
        component={Link} 
        to={`${match.url}?popup=create-folder`}
      >
        New
      </Button> 
      <List>
        {
          FOLDERS.map(folder => (
            <ListItem 
              key={folder.id} 
              button
              selected={folder.id === 2}
            >
              <ListItemIcon>
                {
                  folder.id === 2
                  ? <FolderIcon fontSize='small' color='primary' /> 
                  : <FolderOpenIcon fontSize='small' />
                }
              </ListItemIcon>
              <ListItemText primary={
                <span 
                  style={{fontWeight: folder.id === 2 ? 600 : 400}}
                >{folder.title}</span>
              } />
            </ListItem>
          ))
        }
      </List>
    </PopupBase>
  );
};