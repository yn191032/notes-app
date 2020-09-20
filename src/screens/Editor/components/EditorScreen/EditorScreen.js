import React from 'react';
import { 
  Route, 
  Switch,
  Link, 
  useHistory,
  useRouteMatch, 
  useParams,
} from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { 
  IconButton,
  Button,
  AppBar,
  Toolbar,
  Input,
  makeStyles,
} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { useMakeLink } from 'hooks';
import { useOneNote } from '../../hooks/useOneNote';
import { useStyles } from './styles';

export const Editor = () => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { noteId } = useParams();
  const { note, updateNoteContent, removeNote, createNote } = useOneNote(noteId);

  const update = (e) => {
    updateNoteContent(e.target.value);
  };

  const remove = () => {
    history.replace('/notes');
    removeNote();
  }

  return (
    <>
      <AppBar 
        position='static' 
        color='default' 
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>

          <IconButton 
            className={classes.icon}
            size='small'
            color='inherit'
            edge='start'
            component={Link}
            to={`/notes`}
          >
            <ArrowBackIcon />
          </IconButton>

          <Button
            disabled={!Boolean(note.id)}
            className={classes.folder}
            endIcon={note.folder !== 'default' ? <BookmarkBorderIcon /> : <BookmarkIcon />}
            color='inherit'
            size='small'
            component={Link}
            to={useMakeLink({pushToQuery: {
              popup: 'rename-folder',
              id: note.id,
              folder: note.folder
            }})}
          >
            <span style={{ textTransform: 'none' }}>{note.folder}</span>
          </Button>

          <IconButton
            disabled={!Boolean(note.id)}
            className={classes.icon}
            size='small'
            color='inherit'
            onClick={remove}
          >
            <DeleteIcon fontSize='small' />
          </IconButton>

          <IconButton
            disabled={!Boolean(note.id)}
            className={classes.icon} 
            size='small' 
            edge='end' 
            color='primary' 
            onClick={() => {
              history.replace(url);
            }}
          >
            <CheckCircleIcon fontSize='small' />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path={`${url}/edit`} render={() => {
          return (
            <form>
              <Input
                fullWidth
                multiline
                autoFocus
                placeholder='type something...'
                className={classes.input}
                value={note.content}
                onChange={update}
              />
            </form>
          )
        }} />

        <Route exact path={url} render={() => (
          <div
            className={classes.rendered} 
            onClick={() => {
              if (!noteId) {
                createNote().then(note => {
                  history.replace(`/notes/${note.id}/edit`);
                });
                return;
              }

              history.replace(`${url}/edit`)
            }}
          >
            <ReactMarkdown source={note.content} />
          </div>
        )} />
      </Switch>
    </>
  );
};