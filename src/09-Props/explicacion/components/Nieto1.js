import React from 'react'

export const Nieto1 = ({ num, pintarPantalla, texto, setTexto }) => {
  return (
    <div className='hijo borde nieto'>
        <h3>Nieto1</h3> 
        <p>El número es: {num}</p>
        <button onClick={pintarPantalla}>Saludar</button>
        <p>Texto: {texto}</p>
        <button onClick={() => setTexto("Se cambió, wey")}>Cambiar texto 2</button>
    </div>
  )
}
