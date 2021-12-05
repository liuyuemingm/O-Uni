import React , { Component }from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import LoginForm from './container/LoginForm';
import CreateNewAccount from './container/CreateNewAccount.js';

import {
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem,
  Nav,
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


class Login extends Component {
  constructor(){
    super();
    this.state = {
      showModal : false,
      form : ''
    }
  }

  close = () => {
    this.setState ({ showModal: false });
  }



  open = () => {
    this.setState ({ showModal : true});
  }


  render(){
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />
        <Button type="button" className="btn btn-default" onClick={this.open}>
          Login
        </Button>
        <LoginForm showModal={this.state.showModal} onClose = {this.close} />
     </div>
    );
  }
  
}
render(<Login />, document.getElementById('root'));
export default Login

