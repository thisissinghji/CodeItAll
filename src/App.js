import React from 'react'
import { Navbar, CTA} from './Components';
import {Header,About,Footer} from './Container';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <CTA/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App