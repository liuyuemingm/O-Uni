
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AnimatedModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Open Animated Modal
      </Button>


      return (
      <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar>
          <Typography color='#B52E2E' variant="h6" className={classes.title}>
            Logo
          </Typography>
          <Button color="red" onClick={handleOpen}>
            Signup
          </Button>
          <Button style={{ color: "#B52E2E" }} onClick={handleOpen}>
            Login
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2>Animated React Modal</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim.
                </p>
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}