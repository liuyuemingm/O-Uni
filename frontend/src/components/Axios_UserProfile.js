import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { color } from '@mui/system';


export default class Profile extends React.Component {

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

    const profile = {
      email: this.props.email,
    };

    axios.post(`http://localhost:5000/CS3110-server/profile`, this.props.email)
      .then(res => {
        const pro = res.data
        this.setState({ pro });
      })

    // this.setState({ open: !this.state.open })
  }




  render() {
    return (
      <div style={{ margin: "0 10px 0" }}>
        <Button onClick={this.handleClickOpen} variant="outlined">
          My Profile
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} >
          <DialogTitle>My User Profile</DialogTitle>
          <DialogContent style={{ width: '300px' }}>
            <DialogContentText>
              Name: {this.props.name}
            </DialogContentText>
            <DialogContentText>
              Email: {this.props.email}
            </DialogContentText>
            <DialogContentText>
              School: {this.props.school}
            </DialogContentText>
            <DialogContentText>
              Major: {this.props.major}
            </DialogContentText>
            <DialogContentText>
              Year: {this.props.year}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit}>My Posts</Button>
            <Button onClick={this.handleClose}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
