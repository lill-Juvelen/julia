import React from 'react'
import Layout from './pages/Layout'
import About from  './pages/About'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
      //contains all the paths
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route index element={<Home />} />
      <Route path='/about' exact element = {<About/>}> </Route>
    </Routes>
  </Router>
  
  </>
    )
}
export default App;
