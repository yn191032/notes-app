import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  CircularProgress, 
  Chip, 
} from '@material-ui/core';

import BookmarksIcon from '@material-ui/icons/Bookmarks';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { useStyles } from './styles';

export const FolderList = ({ folders }) => {
  const classes = useStyles();
  const { folderId } = useParams();

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>

        <div className={classes.item}>
          <Chip
            clickable
            icon={<BookmarksIcon className={classes.itemIcon} />}
            label='all notes'
            color={!folderId ? 'secondary' : 'primary'}
            component={Link}
            to={`/notes/`}
          />
        </div>

        {
          folders 
          ? folders.map(folder => 
            <div key={folder} className={classes.item}>
              <Chip
                icon={
                  folder !== 'default'
                  ? <BookmarkIcon className={classes.itemIcon} />
                  : <BookmarkBorderIcon className={classes.itemIcon} />
                }
                color={folderId === folder ? 'secondary' : 'primary'}
                clickable
                label={folder ? folder : 'no folder'}
                component={Link}
                to={`/notes/folder/${folder}`}
                />
            </div>
          )
          : <CircularProgress color='primary' size={30} />
        }

      </div>
    </div>
  );
};