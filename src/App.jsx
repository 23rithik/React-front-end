import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './components/Employee'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Employee' element={<Employee/>}></Route>
      </Routes>
    </>
  )
}

export default App
