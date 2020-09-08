import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
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
import EditIcon from '@material-ui/icons/Edit';

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
  count: {
    marginLeft: 8,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  date: {
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  action: {
    color: 'rgba(0,0,0,0.2)',
  }
}));

export const FolderList = ({ folders }) => {
  const { url } = useRouteMatch();
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
                primary={
                  <>
                    {folder.title}
                    <small className={classes.count}>
                      {folder.count}
                    </small>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <IconButton component={Link} to={`${url}?popup=rename-folder`}>
                  <EditIcon fontSize='small' className={classes.action} />
                </IconButton>
                <IconButton>
                  <DeleteSweepIcon fontSize='small' className={classes.action} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        }
      </List>
    </Container>
  );
};