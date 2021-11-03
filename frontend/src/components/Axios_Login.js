import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  state = {
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

    axios.post(`http://localhost:5000/CS3110-server/signup`, this.state)
      .then(res => {
        console.log(this.state);
        console.log(res);
        console.log(res.data);
        console.log(login);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
