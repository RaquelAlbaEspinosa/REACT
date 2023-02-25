import React, { useContext } from 'react'
import petContext from '../../../context/PetContext'

export const Biznieto3 = () => {
    const {nombre, raza} = useContext(petContext)
  return (
    <div>
        <h3>Biznieto3</h3>
        <p>Nombre mascota: {nombre}</p>
        <p>Raza mascota: {raza}</p>
    </div>
  )
}
