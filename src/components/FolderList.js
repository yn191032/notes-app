import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  makeStyles,
  CircularProgress, 
  Chip, 
  Menu, 
  MenuItem 
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderIcon from '@material-ui/icons/Folder';
import NotesIcon from '@material-ui/icons/Notes';

import { useMakeLink } from '../hooks';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#fff',
    overflow: 'scroll',
    padding: 16,
    paddingBottom: 22,
  },
  inner: {
    display: 'flex',
  },
  item: {
    paddingRight: 12,
  },
  addIcon: {
    width: 20, 
    paddingLeft: 5,
  },
  itemIcon: {
    width: 16, 
    paddingLeft: 5,
  },
  itemMenuIcon: {
    width: 22, 
    paddingLeft: 5
  },
}));

const FolderMenu = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Rename</MenuItem>
      <MenuItem onClick={handleClose}>Delete</MenuItem>
    </Menu>
  );
};

export const FolderList = ({ folders }) => {
  const classes = useStyles();
  const { folderId } = useParams();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.wrapper}>
      <FolderMenu anchorEl={anchorEl} handleClose={handleClose} />
      <div className={classes.inner}>
        <div className={classes.item}>
          <Chip
            clickable
            icon={<AddIcon className={classes.addIcon} />}
            label="new folder"
            color="primary"
            component={Link}
            to={useMakeLink({pushToQuery: {
              'popup': 'create-folder'
            }})}
          />
        </div>
        <div className={classes.item}>
          <Chip
            clickable
            icon={<NotesIcon className={classes.itemIcon} />}
            label='all'
            color={!folderId ? 'secondary' : 'primary'}
            component={Link}
            to={`/notes/`}
          />
        </div>
        {
          folders 
          ? folders.map(folder => 
              <div key={folder.id} className={classes.item}>
                <Chip
                  icon={<FolderIcon className={classes.itemIcon} />}
                  deleteIcon={<MoreVertIcon className={classes.itemMenuIcon} />}
                  color={Number(folderId) === folder.id ? 'secondary' : 'primary'}
                  clickable
                  label={folder.title}
                  component={Link}
                  to={`/notes/folder/${folder.id}`}
                  onDelete={handleClick}
                  />
              </div>
            )
            : <CircularProgress color='primary' size={30} />
        }

      </div>
    </div>
  );
};
  
  // return (
  //   folders ?
  //     <List className={classes.list}>
  //       {
  //         folders.map((folder) => 
  //           <ListItem 
  //             button 
  //             key={folder.id} 
  //             className={classes.item}
  //             component={Link}
  //             to={`/notes/folder/${folder.id}`}
  //           >
  //             <ListItemIcon>
  //               <FolderOpenIcon fontSize='small' />
  //             </ListItemIcon>
  //             <ListItemText 
  //               primary={
  //                 <>
  //                   {folder.title}
  //                   <small className={classes.count}>
  //                     {folder.count}
  //                   </small>
  //                 </>
  //               }
  //             />
  //             <ListItemSecondaryAction>
  //               <IconButton component={Link} to={`${url}?popup=rename-folder`}>
  //                 <EditIcon fontSize='small' className={classes.action} />
  //               </IconButton>
  //               <IconButton>
  //                 <DeleteSweepIcon fontSize='small' className={classes.action} />
  //               </IconButton>
  //             </ListItemSecondaryAction>
  //           </ListItem>
  //         )
  //       }
  //     </List>
  //     : <div className={classes.loading} >
  //         <CircularProgress color='inherit' />
  //       </div >
  // );