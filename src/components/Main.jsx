import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import { Element } from 'react-scroll'

function Main() {
  return (
    <div>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Main
