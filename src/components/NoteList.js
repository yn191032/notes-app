import React from 'react';

import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  ListItemSecondaryAction, 
  IconButton,
  makeStyles,
  Container,
} from '@material-ui/core';

import NotesIcon from '@material-ui/icons/Notes';
import DeleteIcon from '@material-ui/icons/Delete';
import LockIcon from '@material-ui/icons/Lock';

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

export const NoteList = ({ notes }) => {
  const classes = useStyles();

  return (
    <Container>
      <List className={classes.list}>
        {
          notes.map((note) => 
          <ListItem key={note.id} button className={classes.item}>

              <ListItemIcon>
                { note.private ? <LockIcon fontSize='small' /> : <NotesIcon fontSize='small' /> }
              </ListItemIcon>

              <ListItemText 
                primary={
                  <span>
                    <span className={classes.folder}>
                      {note.folder}
                    </span>
                    {note.caption}
                  </span>
                }
                secondary={
                  <span className={classes.date}>
                    {note.date}
                  </span>
                }
                />

              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon className={classes.delete} fontSize='small' />
                </IconButton>
              </ListItemSecondaryAction>

            </ListItem>
          )
        }
      </List>
    </Container>
  );
};