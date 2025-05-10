import React, { Component } from 'react'
import Navbar_com from './Navbar/Navbar_com'
import {Routes,Route} from 'react-router-dom'
import Home from './Randomclr/RandomClr'
import RandomQuote from './RandomQuote/RandomQuote'
import Bgchange from './Bgchange/Bgchange'
import Login from './LoginSignup/Login'
import HomeToggleBg from './HomeToggleBg/HomeToggleBg'
 class App extends Component {
  render() {
    return (
      <div>
        <Navbar_com/>
        <Routes>
          <Route path='/count-bgchange' element={<Bgchange/>}/>
          <Route path='/random-color' element={<Home/>}/>
          <Route path='/random-quote' element={<RandomQuote/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/togglebg' element={<HomeToggleBg/>}/>
        </Routes>
      </div>
    )
  }
}
export default App
