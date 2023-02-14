import React from 'react'

export const Card = ({title, name, img, setBool}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>Nombre: {name}</p>
        <img src={`/assets/images/${img}`} alt="" />
        <button onClick={() => setBool(false)}>Cerrar</button>
    </div>
  )
}
