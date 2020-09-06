import React from 'react';
import { Link } from 'react-router-dom';
import { 
  List, 
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@material-ui/core';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddIcon from '@material-ui/icons/Add';

import { PopupBase } from './PopupBase';
import KEYS from '../../data/keys';

export const Lock = ({ match }) => {
  return (
    <PopupBase open={Boolean(match)} title='Lock the note'>
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
          KEYS.map(key => (
            <ListItem 
              key={key.id}
              button
            >
              <ListItemIcon>
                <VpnKeyIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText primary={key.title} />
            </ListItem>
          ))
        }
      </List>
    </PopupBase>
  );
};