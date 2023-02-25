import React from 'react'
import { Biznieto3 } from './Biznieto3'
import PetContext from '../../../context/PetContext'

export const Nieto3 = () => {
    const pet = {
        nombre: "yaky",
        raza: "cocker spaniel"
    }
  return (
    <div>
        <h4>Nieto3</h4>
        <PetContext.Provider value={pet}>
            <Biznieto3 />
        </PetContext.Provider>
    </div>
  )
}
