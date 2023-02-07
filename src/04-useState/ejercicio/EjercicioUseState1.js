import React, { useState } from 'react';
import "./EjercicioUseState1.css";

export const EjercicioUseState1 = () => {

    const [text, setText] = useState("Esto es un texto cualquiera");
    const [back, setBack] = useState("goldenrod");
    const [colorText, setColorText] = useState("black");
    const [theme, setTheme] = useState("claro");
    const [color, setColor] = useState("red");

    const ocultar = () => {setText("")}
    const mostrar = () => {setText("Esto es un texto cualquiera")}
    const claro = () => {
        setBack("goldenrod");
        setColorText("black");
        setTheme("claro");
    }
    const oscuro = () => {
        setBack("rgb(11,11,11)");
        setColorText("white");
        setTheme("oscuro");
    }
    const red = () => {setColor("red")}
    const green = () => {setColor("green")}

    // él lo hace con clases con el mismo nombre que el estado. Si ponemos comillas francesas hay que poner llaves primero porque es javascript

  return (
    <>
        <div className='useState1' style={{backgroundColor: `${back}`, color: `${colorText}`, padding: "100px"}}>
            <h1>EjercicioUseState1</h1>
            <hr />
            <div style={{display: "flex"}}>
                <div style={{width: "60vw"}}>
                    <h2>Texto: {text}</h2>
                    <hr />
                    <h2>Theme: {theme}</h2>
                </div>
                <div style={{backgroundColor: `${color}`, padding: "10px", width: "30vw"}}>
                    <button onClick={red}>rojo</button>
                    <br />
                    <br />
                    <br />
                    <button onClick={green}>verde</button>
                </div>
            </div>
            <button onClick={mostrar}>Mostrar</button>
            <button onClick={ocultar}>Ocultar</button>
            <button onClick={claro}>Claro</button>
            <button onClick={oscuro}>Oscuro</button>
        </div>
    </>
  )
}
