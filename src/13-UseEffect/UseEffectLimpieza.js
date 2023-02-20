import React, { useState, useEffect } from 'react'

export const UseEffectLimpieza = () => {
    const [width, setWidth] = useState(0);

    const currentWidth = () => {
        const widthPantalla = document.body.clientWidth;
        console.log(widthPantalla);
        setWidth(widthPantalla);
    }
    useEffect(() => {
        window.addEventListener("resize", currentWidth);
        console.log("listener encendido!!!");
        return() => {
            window.removeEventListener("resize", currentWidth);
            console.log("listener apagado!!!");
        }
    }, []);
  return (
    <div>
        <h1>UseEffectLimpieza</h1>
        <h2>Pantalla: {width}</h2>
    </div>
  )
}
