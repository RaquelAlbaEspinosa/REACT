import React, { useEffect, useState } from 'react';
import { UseEffectLimpieza } from './UseEffectLimpieza';

export const UseEffectApp = () => {
    // todo lo que empieza por Use en mayúscula es un hook
    // UseEffect: manipular una acción dentro de el ciclo de vida de un componente
    // es una función a la que le pasamos 2 parámetros; el callback y un array de dependencias
    // sobre todo se usa para llamadas a bases de datos, para que solo la llame cuando sea necesario, no cada vez que haya un cambio

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        // console.log("me he ejecutado con el useEffect1");
    }, []);

    useEffect(() => { //un hook NUNCA se puede meter dentro de un if
        // console.log("me ejecuto con el useEffect2");
    }, [num2]); //en el array se pone de qué estado tiene que estar pendiente para ejecutar esto
  return (
    <div>
        <h1>UseEffectApp</h1> 
        <h2>Contador: {num}</h2>
        <hr />
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
        <h2>Contador: {num2}</h2>
        <hr />
        <button onClick={() => setNum2(num2 + 1)}>+</button>
        <button onClick={() => setNum2(num2 - 1)}>-</button>
        <button onClick={() => setShow(!show)}>Mostrar ancho de pantalla</button>
        {show && <UseEffectLimpieza />}
    </div>
  )
}
