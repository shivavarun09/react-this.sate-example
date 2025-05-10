import React, { Component } from 'react'
import './Bgchange.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
export default class App extends Component {
  constructor(){
  super()
  this.state={
    count:0,
    clr:'white'
  }
}
  increment=()=>{
    this.setState({count: this.state.count+1});
  }
  decrement=()=>{
    this.setState({count : this.state.count-1})
  }
  changeclr(bgclr){
    this.setState({clr: bgclr})
    }
  
  

  render() {
    return (

      <div className='main' style={{backgroundColor:this.state.clr , width:'100%', height:'90vh'}}>
<Button className='btn' variant='danger' onClick={()=>{this.increment(),this.changeclr("red");}}>Red + Increment(+ve)</Button>
<h1>{this.state.count}</h1>
<Button className='btn' variant="success" onClick={()=>{this.decrement(),this.changeclr("green");}}>Green + Decrement(-ve)</Button>
      </div>
      
    )
  }
}
