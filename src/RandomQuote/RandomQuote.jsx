import React, { Component } from 'react'
import mahabharatQuotes from './MahabharatQuotes'
import {Button} from 'react-bootstrap'
import './RandomQuote.css'

export default class RandomQuote extends Component {
  constructor(){
    super();
    this.state={
      quote:'Click On Generate Quote Button '
    }
  }
  GenerateRandomQuote=()=>{
    let randomQuotenum = Math.floor(Math.random()*mahabharatQuotes.length)
    // console.log(randomQuotenum)
    const randomQuote = mahabharatQuotes[randomQuotenum]
this.setState({quote:randomQuote})
  }
  render() {
    return (
      <div className='maindiv'>
        <p>{this.state.quote}</p>
        <Button variant='success' onClick={()=>this.GenerateRandomQuote()}>Generate Quote</Button>
      </div>
    )
  }
}
