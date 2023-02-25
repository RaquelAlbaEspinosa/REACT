import React from 'react'
import { useContador } from '../hooks/useContador'


export const CustomHookApp = () => {

    const counter1 = useContador();
    const counter2 = useContador(5);
    const counter3 = useContador();
    const counter4 = useContador(80);
    const counter5 = useContador();
    const counter6 = useContador(3);

  return (
    <div>
        <h1>CustomHookApp</h1>
        <hr />
        <h2>Contador: {counter1.contador}</h2>
        <button onClick={counter1.restar}>-</button>
        <button onClick={counter1.sumar}>+</button>
        <button onClick={counter1.reset}>reset</button>
        <h2>Contador: {counter2.contador}</h2>
        <button onClick={counter2.restar}>-</button>
        <button onClick={counter2.sumar}>+</button>
        <button onClick={counter2.reset}>reset</button>
        <h2>Contador: {counter3.contador}</h2>
        <button onClick={counter3.restar}>-</button>
        <button onClick={counter3.sumar}>+</button>
        <button onClick={counter3.reset}>reset</button>
        <h2>Contador: {counter4.contador}</h2>
        <button onClick={counter4.restar}>-</button>
        <button onClick={counter4.sumar}>+</button>
        <button onClick={counter4.reset}>reset</button>
        <h2>Contador: {counter5.contador}</h2>
        <button onClick={counter5.restar}>-</button>
        <button onClick={counter5.sumar}>+</button>
        <button onClick={counter5.reset}>reset</button>
        <h2>Contador: {counter6.contador}</h2>
        <button onClick={counter6.restar}>-</button>
        <button onClick={counter6.sumar}>+</button>
        <button onClick={counter6.reset}>reset</button>
    </div>
  )
}
