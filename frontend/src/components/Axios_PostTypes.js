import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventEmitter from './EventEmitter';

export default function PostTypes() {

  const handleAll = event => {
    const BtnInfo = { post_type: "ALL" }
    event.preventDefault();
    console.log("Outside of the function ALL: " + BtnInfo);
    axios.post(`http://localhost:5000/CS3110-server/login`, BtnInfo)
      .then(res => {
        console.log("Inside of the function ALL" + BtnInfo);
        console.log(res);
        EventEmitter.emit('ChangePostType', BtnInfo)
      })
  }

  const handleGP = event => {
    const BtnInfo = { post_type: "GP" }
    event.preventDefault();
    console.log("Outside of the function ALL: " + BtnInfo);
    axios.post(`http://localhost:5000/CS3110-server/login`, BtnInfo)
      .then(res => {
        console.log("Inside of the function ALL" + BtnInfo);
        console.log(res);
        EventEmitter.emit('ChangePostType', BtnInfo)
      })

  }
  const handleIT = event => {
    const BtnInfo = { post_type: "IT" }
    event.preventDefault();
    console.log("Outside of the function ALL: " + BtnInfo);
    axios.post(`http://localhost:5000/CS3110-server/login`, BtnInfo)
      .then(res => {
        console.log("Inside of the function ALL" + BtnInfo);
        console.log(res);
        EventEmitter.emit('ChangePostType', BtnInfo)
      })
  }
  const handleCR = event => {
    const BtnInfo = { post_type: "CR" }
    event.preventDefault();
    console.log("Outside of the function ALL: " + BtnInfo);
    axios.post(`http://localhost:5000/CS3110-server/login`, BtnInfo)
      .then(res => {
        console.log("Inside of the function ALL" + BtnInfo);
        console.log(res);
        EventEmitter.emit('ChangePostType', BtnInfo)
      })
  }

  return (
    <div style={{ display: "inline-block" }}>
      <div style={{ margin: "0 10px 0" }}>
        <Button onClick={handleAll} variant="outlined" >
          <FavoriteIcon color="error" />
          <SellIcon color="info" />
          <StarIcon color="warning" />
        </Button>

        <Button onClick={handleGP} variant="outlined" >
          <FavoriteIcon color="error" />
        </Button>
        <Button onClick={handleIT} variant="outlined" >
          <SellIcon color="info" />
        </Button>
        <Button onClick={handleCR} variant="outlined" >
          <StarIcon color="warning" />
        </Button>
      </div>
    </div>
  )
}
