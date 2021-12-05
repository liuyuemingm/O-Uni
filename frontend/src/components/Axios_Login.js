import React from 'react';
import axios, { Axios } from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { color } from '@mui/system';
import Profile from './Axios_UserProfile';


export default class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: 'svbcdhisdc',
      name: 'me',
      school: 'cornell',
      major: 'ehhh',
      password: '',
      year: '2023'
    }
  }

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
      <div style={{ margin: "0 10px 0" }}>
        <Button onClick={this.handleClickOpen} variant="outlined">
          Login
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} >
          <DialogTitle>Welcome back!</DialogTitle>
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
        <Profile email={this.state.email}
          name={this.state.name}
          school={this.state.school}
          major={this.state.major}
          year={this.state.year}
        />
      </div>
    )
  }
}
