import React, { Component } from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import './Navbar_com.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
export default class Navbar_com extends Component {
  render() {
    return (
      <div className='navbar'>
        
            <Link className='links' to='/count-bgchange'><span>Count Bgchange</span></Link >
            <Link className='links' to='/random-color'><span>Random Color</span></Link >
            <Link className='links' to='/random-quote'><span>Random Quote</span></Link >
            <Link className='links' to='/login'><span>Login&SignUp</span></Link >
            <Link className='links' to='/togglebg'><span>Light&Dark mode</span></Link >
            {/* <Nav.Link className='navlinks' href="/random-color">Random Color</Nav.Link>
            <Nav.Link className='navlinks' href="/random-quote">Random Quote</Nav.Link>
            <Nav.Link className='navlinks' href="/login">Login&SignUp</Nav.Link>
            <Nav.Link className='navlinks' href="/togglebg">Light&Dark mode</Nav.Link> */}
        
      </div>
    )
  }
}
