import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  popupTitle: {
    position: 'absolute',
  },
  popupContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '40px 20px !important',
  },
}));