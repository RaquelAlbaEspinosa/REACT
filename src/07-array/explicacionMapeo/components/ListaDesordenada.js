import React, { useState } from 'react';
const initialValue = ["María", "Pepe", "Juan", "Sara"];

export const ListaDesordenada = () => {
    const [list, setList] = useState(initialValue);
    console.log(list);

  return (
    <div className='contPpal'>
        <h2>Lista desordenada:</h2>
        <ul>
        {list.map((x) => 
                <li key = {x}>Nombre: {x}</li>
        )}
        </ul>
        {/* cada uno tiene su propia clave para que no haya problemas */}
    </div>
  )
}