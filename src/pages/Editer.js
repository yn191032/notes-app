import React from 'react';
import { 
  Route, 
  Link, 
  useHistory,
  useRouteMatch
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
import DoneIcon from '@material-ui/icons/Done';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  ChooseFolder
} from '../components/popups';

const MARKEDTEXT = `
# Marked in the browser
\n\nRendered by **marked**. 
\n\n###About
\n\nOfnotes is a note taking application that is completely offline with support for live editing markdown and material-design. All notes are stored locally per browser.
\n\n### Features
\n\n- **Markdown**: notes support [github flavored markdown](https://github.github.com/gfm/) and are rendered using material design
\n\n- **Tags**: notes can be tagged to make categorizing and finding them quick and easy
\n\n- **Indexeddb**: never run out of storage space for notes`;

const useStyles = makeStyles((theme) => ({
  appbar: {
    margin: 5,
    borderRadius: 5,
    width: 'auto',
  },
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
    flexGrow: 1,
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

  return (
    <>
      <AppBar className={classes.appbar} position='static' color='primary' elevation={0}>
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
            startIcon={<FolderOpenIcon />}
            color='inherit'
            size='small'
            component={Link}
            to={`${url}/choose-folder`}
          >
            <span style={{ textTransform: 'none' }}>folder</span>
          </Button>
          <IconButton
            className={classes.icon} size='small' color='inherit'>
            <DeleteIcon fontSize='small' />
          </IconButton>
          <IconButton
            className={classes.icon} size='small' edge='end' color='inherit' onClick={() => {
            history.replace(url);
          }}>
            <DoneIcon fontSize='small' />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Route path={`${url}/edit`} children={({ match }) => 
        Boolean(match) ? 
        <form>
          <Input 
            value={MARKEDTEXT}
            className={classes.input}
            placeholder='type something...'
            fullWidth
            multiline
          />
        </form>
        :
        <div className={classes.rendered} onClick={() => {
          history.push(`${url}/edit`);
        }}>
          <ReactMarkdown source={MARKEDTEXT} />
        </div>
      } />

      <Route exact path={`${url}/choose-folder`} component={ChooseFolder}/>
    </>
  );
};