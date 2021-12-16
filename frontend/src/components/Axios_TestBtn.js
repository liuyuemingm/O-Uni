import React from 'react';
import axios, { Axios } from 'axios';
import Button from '@mui/material/Button';
import EventEmitter from './EventEmitter';


export default function TestBtn() {


  const handleClick = (event) => {
    const BtnInfo = { post_type: "IT" }
    event.preventDefault();
    console.log("Outside of the function: " + BtnInfo);
    axios.post(`http://localhost:5000/CS3110-server/login`, BtnInfo)
      .then(res => {
        console.log("Inside of the function" + BtnInfo);
        console.log(res);
        EventEmitter.emit('ChangePostType', BtnInfo)

      })
  }


  return (
    <div style={{ margin: "0 10px 0" }}>
      <Button onClick={handleClick} variant="outlined">
        Item Trading
      </Button>

    </div>
  )
}

