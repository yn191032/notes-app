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
import LockIcon from '@material-ui/icons/Lock';
import DoneIcon from '@material-ui/icons/Done';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  Lock,
  Unlock,
  ChooseFolder
} from '../components/popups';

const MARKEDTEXT = '# Marked in the browser\n\nRendered by **marked**.';

const useStyles = makeStyles((theme) => ({
  input: {
    position: 'absolute',
    top: 56,
    bottom: 0,
    padding: theme.spacing(2),
    alignItems: 'baseline',
  },
  folder: {
    flexGrow: 1, 
    justifyContent: 'left',
    marginLeft: 5,
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
      <AppBar position='static' color='default' elevation={1}>
        <Toolbar>
          <IconButton 
            edge='start' 
            color='inherit'
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
            folder
          </Button>
          <IconButton color='inherit' component={Link} to={`${url}/lock`}>
            <LockIcon fontSize='small' />
          </IconButton>
          <IconButton color='inherit'>
            <DeleteIcon fontSize='small' />
          </IconButton>
          <IconButton edge='end' color='inherit' onClick={() => {
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
      <Route exact path={`${url}/unlock`} component={Unlock}/>
      <Route exact path={`${url}/lock`} component={Lock}/>
    </>
  );
};