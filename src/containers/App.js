import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Form from '../components/app/Form'
import Inicio from '../components/app/Inicio'
import Lunch from '../components/app/Lunch'
import Meals from '../components/app/Meals'
import Landing from '../components/Landing'
import UsersApi from '../components/UsersApi'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/landing' index element={<Landing/>} />
      <Route path='/users' element={<UsersApi/>} />
      <Route path='/app' element={<Inicio/>} />
      <Route path='/app/meals' element={<Meals/>} />
      <Route path='/app/lunch' element={<Lunch/>} />
      <Route path='/app/breakfast' element={<Form/>} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/app/*" element={<Navigate to="/app" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
