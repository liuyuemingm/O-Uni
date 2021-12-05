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
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default class PostTypes extends React.Component {

  state = {
    postType: "ALL"
  }

  handleAll = event => {
    this.setState({ postType: "ALL" })
    console.log(this.state);
    // event.preventDefault();

    // axios.post(`http://localhost:5000/CS3110-server/login`, this.state)
    //   .then(res => {
    //     console.log(this.state);
    //   })

  }

  handleGP = event => {
    this.setState({ postType: "GP" })
    console.log(this.state);
    // event.preventDefault();

    // axios.post(`http://localhost:5000/CS3110-server/login`, this.state)
    //   .then(res => {
    //     console.log(this.state);
    //   })

  }
  handleIT = event => {
    this.setState({ postType: "IT" })
    console.log(this.state);
    // event.preventDefault();

    // axios.post(`http://localhost:5000/CS3110-server/login`, this.state)
    //   .then(res => {
    //     console.log(this.state);
    //   })

  }
  handleCR = event => {
    this.setState({ postType: "CR" })
    console.log(this.state);
    // event.preventDefault();

    // axios.post(`http://localhost:5000/CS3110-server/login`, this.state)
    //   .then(res => {
    //     console.log(this.state);
    //   })

  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <div style={{ margin: "0 10px 0" }}>
          <Button onClick={this.handleAll} variant="outlined" >
            <FavoriteIcon color="error" />
            <SellIcon color="info" />
            <StarIcon color="warning" />
          </Button>

          <Button onClick={this.handleGP} variant="outlined" >
            <FavoriteIcon color="error" />
          </Button>
          <Button onClick={this.handleIT} variant="outlined" >
            <SellIcon color="info" />
          </Button>
          <Button onClick={this.handleCR} variant="outlined" >
            <StarIcon color="warning" />
          </Button>
        </div>
      </div>
    )
  }
}
