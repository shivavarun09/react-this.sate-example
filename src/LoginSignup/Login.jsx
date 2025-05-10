import { Button,Form } from 'react-bootstrap'
import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
  constructor(){
    super()
    this.state={
      isLogedin: true
    }
  }
  changeuserstate=()=>{
    this.setState({isLogedin:!this.state.isLogedin})
  }
  render() {
    return (
      <div className='maindiv'>
        
        {this.state.isLogedin?    <Form className='loginfrom'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        <Button>LogIn</Button>
      </Form.Group>
    </Form>
    :   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type='text' placeholder='Enter Your Name'/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>}
        <Button variant='success' onClick={()=>this.changeuserstate()}>{this.state.isLogedin?"Switch to SignUp":"Switch to Login"}</Button>
      </div>
    )
  }
}
