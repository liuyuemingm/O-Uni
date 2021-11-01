import React, { Component } from 'react';
import { render } from 'react-dom';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      fullName: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleForm = e => {
    e.preventDefault();
    const data = {fullName: this.state.fullName, password: this.state.password}
    console.log(data)
    fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/jason"}
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch( e => console.log(e));
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          (value === "user1") === false
            ? 'User not found'
            : '';
        break;
      case 'password': 
        errors.password = 
          (value === "123456") === false
            ? 'Password incorrect'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({formValid: validateForm(this.state.errors)});
    this.setState({errorCount: countErrors(this.state.errors)});
  }

  render() {
    const {errors, formValid} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Login</h2>
          <form onSubmit={this.handleForm} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">User Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>

            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button>Login</button>
            </div>
            {this.state.errorCount !== null ? <p className="form-status" >Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'}
          </form>
        </div>
      </div>
    );
  }
}
export default Register

