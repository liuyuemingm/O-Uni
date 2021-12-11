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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





export default class NewPost extends React.Component {

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
    var tempDate = new Date();
    this.state.date = tempDate.getFullYear() + (tempDate.getMonth() + 1) + tempDate.getDate()

    const newpost = {
      postType: this.state.postType,
      title: this.state.title,
      message: this.state.message,
      date: this.state.date,
    };
    console.log(newpost);
    axios.post(`http://localhost:5000/CS3110-server/login`, this.state)
      .then(res => {
        console.log(this.state);
        console.log(res);
        console.log(res.data);
        console.log(newpost);
      })

    this.setState({ open: !this.state.open })
  }


  render() {
    return (
      <div style={{ margin: "0 10px 0" }}>
        <Button onClick={this.handleClickOpen} variant="outlined">
          New Post
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} fullWidth >
          <DialogTitle>Share anything :)</DialogTitle>
          <DialogContent>

            <FormControl component="fieldset">
              <FormLabel component="legend">Post Type</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="General Post" control={<Radio />} label="General Post" />
                <FormControlLabel value="Item Trading" control={<Radio />} label="Item Trading" />
                <FormControlLabel value="Course Rating" control={<Radio />} label="Course Rating" />
              </RadioGroup>
            </FormControl>

            <TextField
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              multiline
              variant="filled"
              name='title'
              onChange={this.handleChange}
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              fullWidth
              multiline
              rows={5}
              variant="filled"
              name='message'
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            {(() => {
              const signedIn = window.signedIn
              if (signedIn) return (<Button onClick={this.handleSubmit}>Post</Button>)
              else return (<Button disabled>go sign in dude</Button>)
            })()}

          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
