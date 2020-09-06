import React from 'react';

import { 
  Switch, 
  Route, 
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import { Notes } from './Notes';
import { Folders } from './Folders';
import { Editer } from './Editer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { 
  Layout, 
  GlobalPopup 
} from '../components';

const colors = {
  primary: '#655DB0',
  secondary: '#FFE59A',
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
    MuiListItem: {
      root: {
        borderBottom: '1px solid rgba(0,0,0,0.1)',
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
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/notes/new' component={Editer} />
            <Route path='/notes/:id' component={Editer} />
            
            <Route path='/notes/folder/:id' component={Notes} />
            <Route path='/notes' component={Notes} />
            
            <Route exact path='/folders' component={Folders} />

            <Redirect to='/notes/new' />
          </Switch>
          <GlobalPopup />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;