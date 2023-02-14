import React from 'react'

export const Info = ({user, setBoolInfo}) => {
  return (
    <div>
        <h2>Info</h2>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Apellido:</strong> {user.surname}</p>
        <p><strong>Dirección:</strong> {user.address}</p>
        <p><strong>Ciudad:</strong> {user.city}</p>
        <p><strong>Imagen:</strong> {user.img}</p>
        <button onClick={() => setBoolInfo(false)}>Cerrar</button>
    </div>
  )
}
