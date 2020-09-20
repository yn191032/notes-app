import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { UndoProvider, NoteProvider } from 'contexts';
import { theme } from './theme';
import { Router } from '../Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UndoProvider>
        <NoteProvider>
          <Router />
        </NoteProvider>
      </UndoProvider>
    </ThemeProvider>
  );
};

export default App;