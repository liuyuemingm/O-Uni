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


export default class Respond extends React.Component {

  state = {

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const response = {
      postTitle: this.props.title,
      message: this.state.message
    };
    console.log(this.state);
    console.log(response);
    // axios.post(`http://localhost:5000/CS3110-server/login`, response)
    //   .then(res => {
    //     console.log(this.state);
    //     console.log(response);
    //   })

  }


  render() {
    return (
      <div style={{ margin: "0 10px 0" }}>

        <TextField
          margin="dense"
          id="message"
          label="Message"
          fullWidth
          multiline
          rows={3}
          variant="filled"
          name='message'
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>Reply</Button>
      </div>
    )
  }
}
