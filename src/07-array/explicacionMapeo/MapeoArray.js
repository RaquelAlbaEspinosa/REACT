import React, { useState } from 'react';
import { EjercicioFrutas } from '../ejercicio-frutas/EjercicioFrutas';
import { ListaCompraApp } from '../explicacionArray/ListaCompraApp';
import { ListaDesordenada } from './components/ListaDesordenada';
import "./MapeoArray.scss";
const initialValue = ["María", "Pepe", "Juan", "Sara"];

export const MapeoArray = () => {
    const [list, setList] = useState(initialValue);
    console.log(list);

  return (
    <div className='contPpal'>
        {/* <h1>Mapear Array</h1>
        <hr />
        <p>{list[0]}</p>
        <p>{list[1]}</p>
        <p>{list[2]}</p>
        <p>{list[3]}</p>
        <h2>Mapeo real:</h2>
        {list.map((x) => 
            <div className='usuario' key = {x}>
                <h2>Usuario</h2>
                <p>Nombre: {x}</p>
            </div>
        )} */}
        {/* cada uno tiene su propia clave para que no haya problemas */}
        {/* <ListaDesordenada /> */}
        <EjercicioFrutas />
        {/* <ListaCompraApp /> */}
    </div>
  )
}
