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
  const [openUser, setOpenUser] = useState(false);


  return (
    <div>
      <Top
        onClickLogin={() => setOpenLogin(true)}
        onClickSignup={() => setOpenSignup(true)}
        onClickUser={() => setOpenUser(true)}
      />
      <SignupModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      <LoginModal open={openSignup} handleClose={() => setOpenSignup(false)} />
      <UserModal open={openUser} handleClose={() => setOpenUser(false)} />
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
        <Button
          variant="outlined"
          className={classes.loginButton}
          onClick={props.onClickUser}
          style={{color:"#B52E2E"}}
        >
          User Profile
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
            <TextField id="standard-basic" label="school" fullWidth />
            <TextField id="standard-basic" label="school year" fullWidth />
            <TextField id="standard-basic" label="major" fullWidth />

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

const UserModal = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth = {10}
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>
          User Profile
        </DialogTitle>
        <DialogContent className={classes.content}>
          <div className={classes.text}>
          <Typography htmlFor="name">Name: Aron </Typography>
          <Typography htmlFor="email">Email: abc123@cornell.edu </Typography>
          <Typography htmlFor="school">School: Cornell </Typography>
          <Typography htmlFor="year">Year: 2024</Typography>
          <Typography htmlFor="major">Major: CS</Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} className={classes.signUpButton}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogB