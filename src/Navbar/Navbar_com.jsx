import React, { Component } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import './Navbar_com.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiLoginBoxFill } from "react-icons/ri";
export default class Navbar_com extends Component {
  render() {
    return (
      <div >
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React this.state examples</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='navlinks' href="/count-bgchange">Count Bgchange</Nav.Link>
            <Nav.Link className='navlinks' href="/random-color">Random Color</Nav.Link>
            <Nav.Link className='navlinks' href="/random-quote">Random Quote</Nav.Link>
            <Nav.Link className='navlinks' href="/login">Login&SignUp</Nav.Link>
            <Nav.Link className='navlinks' href="/togglebg">Light&Dark mode</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
