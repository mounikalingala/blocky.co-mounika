import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'

function App() {

  const [darkTheme, setDarkTheme] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkTheme);
    document.body.classList.toggle('light-mode', !darkTheme);
  }, [darkTheme]);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
        <Route path="/about" element={<About darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
