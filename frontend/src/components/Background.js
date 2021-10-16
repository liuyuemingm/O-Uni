import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function rand() {
    return Math.round(Math.random() * 20) - 10;
}

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
  const [modalStyle] = React.useState(getModalStyle);



  return (
    <AppBar position="static" style = {{ background: '#FFFFFF' }}>
      <Toolbar>
        <Typography color='#B52E2E' variant="h6" className={classes.title}>
          Logo
        </Typography>
        <Button color="red" onClick={handleOpen}>
          Signup
        </Button>
        <Button style={{color:"#B52E2E"}} onClick={handleOpen}>
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
  );
};

export default Navbar;