import React from 'react';
import { Link } from 'react-router-dom';

import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  ListItemSecondaryAction, 
  IconButton,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';

import NotesIcon from '@material-ui/icons/Notes';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
  },
  item: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
    color: 'rgba(0, 0, 0, 0.8)',
  },
  itemText: {
    margin: 0,
  },
  title: {
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  folder: {
    fontWeight: 600,
    display: 'block',
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  date: {
    fontSize: '0.8em',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  delete: {
    color: 'rgba(0,0,0,0.2)',
  },
  loading: {
    color: 'rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    margin: 16
  },
  noData: {
    textAlign: 'center',
    paddingTop: 6,
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.3)',
  },
}));

export const NoteList = ({ notes, onRemove }) => {
  const classes = useStyles();
  
  return (
    notes 
      ? notes.length < 1 ? <div className={classes.noData}>No notes</div> : 
      
      <List className={classes.list}>
        {
          notes.map((note) => 
            <ListItem
              className={classes.item}
              key={note.id}
              component={Link}
              to={`/notes/${note.id}`}
            >
              <ListItemIcon>
                <NotesIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText
                className={classes.itemText}
                primary={
                  <span>
                    <span className={classes.folder}>
                      {note.folder}
                    </span>
                    <span className={classes.title}>
                      {`${note.content.substr(0,12)}...`}
                    </span>
                  </span>
                }
                secondary={
                  <span className={classes.date}>
                    {note.date}
                  </span>
                }
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => onRemove(note.id)}>
                  <DeleteIcon className={classes.delete} fontSize='small' />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        }
      </List>
      : <div className={classes.loading} >
          <CircularProgress color='inherit' />
        </div >
  );
};