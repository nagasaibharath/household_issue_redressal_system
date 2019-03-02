import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './FormLogin.css';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  onClickRegister = (e) => {
    this.props.setView("Register");
  }

  onEmailChange = (input) => {
    this.setState({ email: input.target.value })
  }

  onPasswordChange = (input) => {
    this.setState({ password: input.target.value })
  }

  postRequest = () => {
    fetch("/login", {
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.isAdmin) {
        this.props.setSigninStatus(true,this.state.email);
        this.props.setView("AdminHome");
      }
      else if(data.validUser === true) {
        this.props.setSigninStatus(true,this.state.email);
        this.props.setView("Feed");
      }
    })
  }

  render() {
    return (
        <div className="formlogin">
           <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="tvEmail" type="email" placeholder="Enter email" onChange={this.onEmailChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="tvPassword" type="password" placeholder="Password" onChange={this.onPasswordChange} />
                </Form.Group>
                <Button id="btnLogin" variant="primary" onClick={this.postRequest} >Login</Button><br /><br />
                <Button id="btnRegister" variant="secondary" onClick={this.onClickRegister} >Not a user? Register here</Button>
            </Form> 
        </div>
    );
  }
}

export default FormLogin;
