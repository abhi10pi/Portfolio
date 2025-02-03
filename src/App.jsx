import './App.css'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'



function App() {

  return (
    <>


      <Router>


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </Router>


    </>
  )
}

export default App
