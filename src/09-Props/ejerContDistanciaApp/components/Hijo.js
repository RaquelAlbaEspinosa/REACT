import React, { useState } from 'react'
import { Nieto } from './Nieto'

export const Hijo = ({cont, setCont}) => {
    const [bool, setBool] = useState(false)
  return (
    <div>
        <h2>Hijo</h2>
        <hr />
        <button onClick={() => setBool(!bool)}>Abrir/Cerrar</button>
        {bool && 
            <div className='nieto'>
                <Nieto cont = {cont} setCont = {setCont} />
            </div>
        }
    </div>
  )
}
