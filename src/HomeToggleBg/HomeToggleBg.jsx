import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
export default class HomeToggleBg extends Component {
  constructor(){
    super()
    this.state={
      bg:true
    }
  }
  togglebg=()=>{
this.setState({bg:!this.state.bg})
  }
  render() {
    return (
      <div className='maindiv' style={{backgroundColor:this.state.bg?"white":"black"}}>
        <Button onClick={()=>this.togglebg()}>{this.state.bg?<FaRegMoon />:<FaSun />}</Button>
      </div>
    )
  }
}
