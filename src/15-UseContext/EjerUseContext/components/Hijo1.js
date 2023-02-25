import React from 'react'
import { Nieto1 } from './Nieto1'
import { Nieto2 } from './Nieto2'
import ClaveContext from '../../../context/ClaveContext';

export const Hijo1 = () => {
    const clave = "abcde";
  return (
    <div>
        <h2>Hijo1</h2>
            <ClaveContext.Provider value={clave}>
                <Nieto1 />
            </ClaveContext.Provider>
        
        <Nieto2 />
    </div>
  )
}
