import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarApp } from './components/NavbarApp'
import { OneUser } from './components/user/OneUser'
import { About } from './pages/about/About'
import { Error } from './pages/Error/Error'
import { Home } from './pages/home/Home'
import { User } from './pages/user/User'

export const RouterDomApp = () => {
    // hook para traer los parámetros: useParams



  return (
    <BrowserRouter>
        <NavbarApp />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/about" element={<About/>} /> 
            <Route path='/user' element={<User/>} /> 
            <Route path='/OneUser/:id' element={<OneUser/>} /> {/* Rutas dinámicas */}
            <Route path='*' element={<Error/>} /> {/* Cualquiera que no sea ninguna de las enteriores */}
        </Routes>
    </BrowserRouter>
  )
}
