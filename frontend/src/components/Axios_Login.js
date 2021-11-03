import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default class Login extends React.Component {

  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: !this.state.open })
  }

  handleClose = () => {
    this.setState({ open: !this.state.open })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`http://localhost:5000/CS3110-server/login`, this.state)
      .then(res => {
        console.log(this.state);
        console.log(res);
        console.log(res.data);
        console.log(login);
      })

    this.setState({ open: !this.state.open })
  }


  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen}>
          Login
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} >
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please login with your school email address.
            </DialogContentText>
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              name='email'
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              name='password'
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Login</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
