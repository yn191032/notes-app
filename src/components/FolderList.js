import React from 'react';
import { Link } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  ListItemSecondaryAction, 
  IconButton,
  Container,
  makeStyles,
} from '@material-ui/core';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const useStyles = makeStyles((theme) => ({
  list: {
    marginBottom: 47,
  },
  item: {},
  folder: {
    display: 'block',
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  date: {
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  delete: {
    color: 'rgba(0,0,0,0.2)',
  }
}));

export const FolderList = ({ folders }) => {
  const classes = useStyles();

  return(
    <Container>
      <List className={classes.list}>
        {
          folders.map((folder) => 
            <ListItem 
              button 
              key={folder.id} 
              className={classes.item}
              component={Link}
              to='/notes'
            >
              <ListItemIcon>
                <FolderOpenIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText 
                primary={folder.title}
              />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteSweepIcon fontSize='small' className={classes.delete} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        }
      </List>
    </Container>
  );
};