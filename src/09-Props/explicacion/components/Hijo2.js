import React from 'react'
import { Nieto1 } from './Nieto1';

export const Hijo2 = ({num, pintarPantalla, texto, setTexto}) => {
  return (
    <div className='hijo borde'>
        <h2>Hijo2</h2>
        <Nieto1 
          num = {num}
          pintarPantalla = {pintarPantalla}
          texto = {texto}
          setTexto = {setTexto}
        />
    </div>
  )
}
