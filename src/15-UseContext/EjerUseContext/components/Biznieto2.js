import React, { useContext } from 'react'
import UserContext from '../../../context/UserContext'

export const Biznieto2 = () => {
    const {nombre, email, password} = useContext(UserContext);
  return (
    <div>
        <h3>Biznieto2</h3>
        <p>Nombre: {nombre}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
    </div>
  )
}
