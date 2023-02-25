import React, { useContext } from 'react'
import ClaveContext from '../../../context/ClaveContext';

export const Nieto1 = () => {
    const clave = useContext(ClaveContext);
  return (
    <div>
        <h4>Nieto 1</h4>
        <p>La clave es: {clave}</p>
    </div>
  )
}
