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

const LogB = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div>
      <Top
        onClickLogin={() => setOpenLogin(true)}
      />
      <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
    </div>
  );
};

const Top = (props) => {
  return (
    <Button
      variant="outlined"
      onClick={props.onClickLogin}
      style={{ color: "#B52E2E" }}
    >
      Login
    </Button>



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
        <DialogTitle id="alert-dialog-title" >
          Login
        </DialogTitle>
        <DialogContent>
          <div >
            <TextField id="standard-basic" label="name" fullWidth />
            <TextField id="standard-basic" label="password" fullWidth />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogB