import React from 'react'

export const Hijo1 = ({ nombres, coche, setCoche }) => {
  // destructuring en línea de las props
  return (
    <div className='hijo borde'>
        <h2>Hijo1</h2>
        <p>Los nombres son:</p>
          {nombres.map((nombre, index) =>
            <p key={index}>{nombre}</p>
          )}
          <h5>Coche:</h5>
          <p>{coche.marca}</p>
          <p>{coche.modelo}</p>
    </div>
  )
}
