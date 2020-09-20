import React from 'react';
import { Link } from 'react-router-dom';

import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  ListItemSecondaryAction, 
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import NotesIcon from '@material-ui/icons/Notes';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { FormatDate } from 'components';

import { useStyles } from './styles';

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
                      {note.folder !== 'default'
                        ? <><BookmarkIcon fontSize='small' className={classes.bookIcon} /> {note.folder}</> 
                        : <><BookmarkBorderIcon fontSize='small' className={classes.bookIcon} /> {note.folder}</>
                      }
                    </span>
                    <span className={classes.title}>
                      {note.content.length >= 20
                        ? `${note.content.substr(0,20)}...`
                        : note.content.substr(0,20)
                      }
                    </span>
                  </span>
                }
                secondary={
                  <span className={classes.date}>
                    <FormatDate date={note.date} />
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