import React from 'react';
import axios from 'axios';

export default class PostRequest extends React.Component {
  state = {
    author: [],
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const author = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      biography: this.state.biography,
      email: this.state.email
    };

    axios.post(`http://localhost:5000/CS3110-server/signup`, this.state)
      .then(res => {
        console.log(this.state);
        console.log(res);
        console.log(res.data);
        console.log("meh");
        console.log(author);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstname" onChange={this.handleChange} />
          </label>
          <label>
            Last  Name:
            <input type="text" name="lastname" onChange={this.handleChange} />
          </label>
          <label>
            Last  Name:
            <input type="text" name="biography" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
