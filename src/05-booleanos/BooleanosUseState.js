import React, { useState } from 'react';
import { EjercicioUseState1 } from '../04-useState/ejercicio/EjercicioUseState1';
import "./style.scss";

export const BooleanosUseState = () => {

    const [bool1, setBool1] = useState(true);

    const cambiarATrue = () => {setBool1(true)}
    const cambiarAFalse = () => {setBool1(false)}

    const [bool2, setBool2] = useState(true);

    // const cambiarBool2 = () => {
    //     bool2 ? setBool2(false) : setBool2(true);
    // }



  return (
    <div className='contPrincipalBool'>
        <h1>BoolApp</h1>
        <hr />
        <div className="contEjemplosBool">
            {/* -------------Card 1------------- */}
            <div className="cardEjem">
                <h4>Cambiar estados booleanos</h4>
                <p>Pintar bool1</p>
                {/* <h3>pintar bool1: {`${bool1}`}</h3> */}
                <h3>Valor bool1: {bool1 ? "true" : "false"}</h3>
                <button onClick={cambiarATrue}>Cambiar a true</button>
                <button onClick={cambiarAFalse}>Cambiar a false</button>
            </div>
            {/* -------------Card 2------------- */}
            <div className="cardEjem">
                <h4>Cambiar booleano con un botón</h4>
                <p>Pintar bool2</p>
                <h3>Valor bool2: {bool2 ? "existo" : "no existo"}</h3>
                <button onClick={() => setBool2(!bool2)}>Cambiar bool2</button>
                {bool2 && <h3>¡Estoy aquí!</h3>}
                {/* si existe lo pintas y sino no */}
                {/* {bool2 && <EjercicioUseState1 />} */}
            </div>
            {/* -------------Card 3------------- */}
            <div className="cardEjem">
            
            </div>
        </div>
    </div>
  )
}
