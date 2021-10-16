import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const classes = {};

const LogB = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (

    <div>
      <Top
        onClickLogin={() => setOpenLogin(true)}
        onClickSignup={() => setOpenSignup(true)}
      />
      <SignupModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      <LoginModal open={openSignup} handleClose={() => setOpenSignup(false)} />
    </div>
  );
};

const Top = (props) => {
  return (
    <AppBar position="static" style = {{ background: '#FFFFFF' }}>
      <Toolbar>
      
    <React.Fragment>

      <div>
        <Button
          variant="outlined"
          className={classes.loginButton}
          onClick={props.onClickLogin}
          style={{color:"#B52E2E"}}
        >
          Signup
        </Button>
        <Button
          variant="outlined"
          className={classes.loginButton}
          onClick={props.onClickSignup}
          style={{color:"#B52E2E"}}
        >
          Login
        </Button>
      </div>
    </React.Fragment>
    </Toolbar>

    </AppBar>

  );
};

const SignupModal = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>
          Sign up
        </DialogTitle>
        <DialogContent className={classes.content}>
          <div className={classes.text}>
            <TextField id="standard-basic" label="name" fullWidth />
            <TextField id="standard-basic" label="email" fullWidth />
            <TextField id="standard-basic" label="password" fullWidth />
            <TextField id="standard-basic" label="confirm password" fullWidth />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} className={classes.signUpButton}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const LoginModal = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>
          Login
        </DialogTitle>
        <DialogContent className={classes.content}>
          <div className={classes.text}>
            <TextField id="standard-basic" label="name" fullWidth />
            <TextField id="standard-basic" label="password" fullWidth />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} className={classes.signUpButton}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogB