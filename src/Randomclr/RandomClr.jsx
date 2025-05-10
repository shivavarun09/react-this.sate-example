import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Randomclr.css'
export default class Home extends Component {
  constructor(){
    super();
    this.state={
      color:'white'
    }
  }
  randomclr=()=>{
    let colorchars = 'abcdef0123456789';
    let hexvalue= '#';
    for(let i=0; i<6;i++){
const Randomchar = Math.floor(Math.random()*colorchars.length)
// console.log(Randomchar)
const Randomhexval = colorchars[Randomchar];
// console.log(Randomhexval)
hexvalue += Randomhexval;
// console.log(hexvalue)
    }
    this.setState({color:hexvalue})
  }
  render() {
    return (
      <div className='maindiv' style={{backgroundColor:this.state.color,width:'100%',height:'90vh'}}>
        <Button variant='warning' onClick={()=>this.randomclr()}>Random color</Button>
      </div>
    )
  }
}
