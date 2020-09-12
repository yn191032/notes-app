import React from 'react';
import { 
  Route, 
  Link, 
  useHistory,
  useRouteMatch, 
  useParams
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
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { useMakeLink, useNote } from '../hooks';

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: 5
  },
  toolbar: {
    minHeight: 45
  },
  input: {
    position: 'absolute',
    top: 56,
    bottom: 0,
    padding: theme.spacing(2),
    alignItems: 'baseline',
  },
  folder: {
    margin: 5,
    marginLeft: 'auto',
  },
  rendered: {
    width: '100%',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 56,
    bottom: 0,
    padding: theme.spacing(2),
  },
}));

export const Editer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { noteId } = useParams();
  const { note } = useNote(noteId);

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
            className={classes.folder}
            endIcon={<FolderIcon />}
            color='inherit'
            size='small'
            component={Link}
            to={useMakeLink({queryToPush: {
              popup: 'choose-folder'
            }})}
          >
            <span style={{ textTransform: 'none' }}>{note.folder}</span>
          </Button>

          <IconButton
            className={classes.icon}
            size='small'
            color='inherit'
            // onClick={() => push({
            //   cb: () => console.log('test'),
            //   message: 'Test message',
            // })}
          >
            <DeleteIcon fontSize='small' />
          </IconButton>

          <IconButton
            className={classes.icon} 
            size='small' 
            edge='end' 
            color='inherit' 
            onClick={() => {
              history.replace(url);
            }}
          >
            <CheckCircleIcon fontSize='small' />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Route path={`${url}/edit`} children={({ match }) => 
        Boolean(match) 
        ? <form>
            <Input 
              value={note.content}
              className={classes.input}
              placeholder='type something...'
              fullWidth
              multiline
            />
          </form>
        : <div 
            className={classes.rendered} 
            onClick={() => {
              history.push(`${url}/edit`);
            }}
          >
            <ReactMarkdown source={note.content} />
          </div>
      } />
    </>
  );
};