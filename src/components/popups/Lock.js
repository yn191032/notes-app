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

import { PopupBase } from './PopupBase';
import KEYS from '../../data/keys';

export const Lock = ({ match }) => {
  return (
    <PopupBase open={Boolean(match)} title='Lock the note'>
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
      <Button 
        disableElevation
        variant='contained'
        color='primary'
        component={Link} 
        to={`${match.url}?popup=create-key`}
      >
        Create new
      </Button>
    </PopupBase>
  );
};