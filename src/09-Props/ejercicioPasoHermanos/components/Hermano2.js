import React from 'react'

export const Hermano2 = ({user, bool }) => {
  return (
    <div>
        <h2>Card</h2>
        <p>Nombre: {bool && user.name}</p>
        <p>Email: {bool && user.email}</p>
        <p>Contraseña: {bool && user.password}</p>
    </div>
  )
}
