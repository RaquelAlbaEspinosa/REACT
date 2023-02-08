import React from 'react'
import { Calculator } from './Calculator/Calculator'
import { Degrees } from './Degrees/Degrees'
import "./Calculadoras.scss"

export const Calculadoras = () => {
  return (
    <div className='calculadoras'>
        <Calculator />
        <Degrees />
    </div>
  )
}
