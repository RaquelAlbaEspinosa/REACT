import React from 'react'

export const Nieto = ({ cont, setCont }) => {
  return (
    <div>
        <h2>Nieto</h2>
        <hr />
        <h4>Contador: {cont}</h4>
        <button onClick={() => setCont(cont-1)}>-</button>
        <button onClick={() => setCont(0)}>Reset</button>
        <button onClick={() => setCont(cont+1)}>+</button>
    </div>
  )
}
