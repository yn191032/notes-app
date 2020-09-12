import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import { Notes, Editer, NewNote } from './index';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { 
  Layout, 
  GlobalPopup, 
  UndoList
} from '../components';

import { UndoProvider } from '../hooks';

const colors = {
  primary: '#5e71d0',
  secondary: '#bf4e4e',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  overrides: {
    MuiSnackbarContent: {
      message: { 
        display: 'flex',
        alignItems: 'center',
        padding: 0,
      },
    },
    MuiMenu: {
      list: {
        padding: 0,
      }
    },
    MuiMenuItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: 44,
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: 'transparent',
          color: colors.primary,
          fontWeight: 600,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 0,
        paddingRight: 16
      },
    },
    MuiFormControl: {
      root: {
        marginBottom: 16,
      },
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UndoProvider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/notes' />
                <Redirect to='/notes/new' />
              </Route>
              <Route path='/notes/folder/:folderId' component={Notes} />
              <Route path='/notes/new' component={NewNote} />
              <Route path='/notes/:noteId' component={Editer} />
              <Route path='/notes' component={Notes} />

              <Redirect to='/' />
            </Switch>
            <GlobalPopup />
            <UndoList />
          </Layout>
        </BrowserRouter>
      </UndoProvider>
    </ThemeProvider>
  );
}

export default App;