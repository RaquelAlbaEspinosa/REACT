import React, { useState } from 'react';
import { Hijo1 } from './components/Hijo1';
import { Hijo2 } from './components/Hijo2';
import "./PropsApp.scss"

export const PropsApp = () => {
  const [texto, setTexto] = useState("con cien cañones por banda...");
  const [coche, setCoche] = useState({marca: "seat", modelo: "leon"});
  const num = 500;
  const nombres = ["ana", "miguel", "josé", "ramón", "natalia"];
  const pintarPantalla = () => console.log("holiwis");
  return (
    <div>
        <h1>PropsApp padre</h1>
        <hr />
        <h3>El número es: {num}</h3>
        <h4>Texto: {texto}</h4>
        <button onClick={() => setTexto("viento en popa a toda vela...")}>Cambiar texto</button>
        <div className='padre borde'>
          <div className='hijos'>
            <Hijo1 
              nombres = {nombres} 
              coche = {coche}
              setCoche = {setCoche}
            />
            <Hijo2 
              num = {num}
              pintarPantalla = {pintarPantalla}
              texto = {texto}
              setTexto = {setTexto}
            />
          </div>
        </div>
    </div>
  )
}
