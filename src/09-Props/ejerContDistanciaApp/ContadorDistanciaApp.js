import React, { useState } from 'react'
import { Hijo } from './components/Hijo'
import "./ContadorDistanciaApp.scss"

export const ContadorDistanciaApp = () => {
    const [cont, setCont] = useState(0);
  return (
    <div className='all'>
        <h1>ContadorDistanciaApp</h1>
        <hr />
        <h2>Contador: {cont}</h2>
        <div className="hijo">
            <Hijo cont = {cont} setCont = {setCont} />
        </div>
    </div>
  )
}
