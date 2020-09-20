import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import { 
  Layout, 
  Popup, 
  Undo
} from 'components';

import { Notes, Editor } from 'screens';

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/notes' />
            <Redirect to='/notes/new' />
          </Route>
          <Route path='/notes/folder/:folderId?' component={Notes} />
          <Route path='/notes/new' component={Editor} />
          <Route path='/notes/:noteId' component={Editor} />
          <Route path='/notes' component={Notes} />
          <Redirect to='/' />
        </Switch>
        <Popup />
        <Undo />
      </Layout>
    </BrowserRouter>
  );
};