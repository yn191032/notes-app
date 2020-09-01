import React from 'react';
import { Link } from 'react-router-dom';

import { 
  BottomNavigation, 
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';

import NotesIcon from '@material-ui/icons/Notes';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

const useStyles = makeStyles(() => ({
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.3)',
  }
}));

export const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.bottomNav}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(newValue);
      }}
    >
      <BottomNavigationAction component={Link} to='/notes' icon={<NotesIcon />} />
      <BottomNavigationAction component={Link} to='/folders' icon={<FolderOpenIcon />} />
    </BottomNavigation>
  );
};