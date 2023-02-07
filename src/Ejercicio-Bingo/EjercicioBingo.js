import React, { useState } from 'react';
import "./EjercicioBingo.scss";

export const EjercicioBingo = () => {
    const [num, setNum] = useState(null);
    const [cont, setCont] = useState(0);
    const randomize = () => {
        setNum(parseInt((Math.random() * 9) + 1));
        setCont(cont + 1);
    }
    const [selectedNum, setSelectedNum] = useState(null);
    const selectNumber = (num) => {
        setSelectedNum(num);
    }
    console.log(selectedNum);
    const reset = () => {
        setSelectedNum(null);
        setNum(null);
        setCont(0);
    }

  return (
    <>
        <div className="bingo">
            <h1>UseState: coincidencia del número elegido</h1>
            <hr />
            <div className="numericos">
                <button onClick={() => selectNumber(1)} className={selectedNum === 1 ? "selected" : null}>1</button>
                <button onClick={() => selectNumber(2)} className={selectedNum === 2 ? "selected" : null}>2</button>
                <button onClick={() => selectNumber(3)} className={selectedNum === 3 ? "selected" : null}>3</button>
                <button onClick={() => selectNumber(4)} className={selectedNum === 4 ? "selected" : null}>4</button>
                <button onClick={() => selectNumber(5)} className={selectedNum === 5 ? "selected" : null}>5</button>
                <button onClick={() => selectNumber(6)} className={selectedNum === 6 ? "selected" : null}>6</button>
                <button onClick={() => selectNumber(7)} className={selectedNum === 7 ? "selected" : null}>7</button>
                <button onClick={() => selectNumber(8)} className={selectedNum === 8 ? "selected" : null}>8</button>
                <button onClick={() => selectNumber(9)} className={selectedNum === 9 ? "selected" : null}>9</button>
            </div>
            <div className="ganador">
                <div className="generator">
                    <button onClick={randomize}>Generar número</button>
                    <div className="pantalla"><p>{num}</p></div>
                </div>
                { num === selectedNum && num != null ?
                        <div className='felicidades'>
                            <h3>Felicidades!!!!</h3>
                        </div>
                : null}
                 </div>
                { num === selectedNum && num != null ?
                        <div className="numeroTiradas">
                            <h3>Has necesitado {cont} tiradas</h3>
                            <button onClick={reset}>Reset</button>
                        </div>
                : null}
            </div>
    </>
  )
}
