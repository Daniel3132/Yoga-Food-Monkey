import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Landing from '../components/Landing'
import Application from './Application'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/landing' index element={<Landing/>} />
      <Route path='/app' element={<Application/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
