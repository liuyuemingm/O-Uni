import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default class Signup extends React.Component {

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

    const signup = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      school: this.state.school,
      major: this.state.major,
      year: this.state.year,
    };

    axios.post(`http://localhost:5000/CS3110-server/signup`, this.state)
      .then(res => {
        console.log(this.state);
        console.log(res);
        console.log(res.data);
        console.log(signup);
      })

    this.setState({ open: !this.state.open })
  }


  render() {
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen} style={{ margin: "0 10px 0" }}>
          Signup
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} >
          <DialogTitle>Hi newbie!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              please sign up with your school email address.
            </DialogContentText>
            <TextField
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              name='email'
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              name='password'
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              label="Full Name"
              fullWidth
              variant="standard"
              name='name'
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              label="Major"
              fullWidth
              variant="standard"
              name='major'
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              label="Year (e.g. 2022)"
              fullWidth
              variant="standard"
              name='year'
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Sign Up</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
