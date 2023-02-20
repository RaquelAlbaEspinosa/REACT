import React, { useRef, useState, useEffect } from 'react'
import "./EjerClaseUseRef.scss";

export const EjerClaseUSeRef = () => {
    const inputText = useRef();
    const text = useRef();
    const background = useRef();
    const [texto, setTexto] = useState("");
    const [size, setSize] = useState(16);
    console.log(size);
    useEffect(() => {
        text.current.style.fontSize = `${size}px`;
    }, [size]);
  return (
    <div ref={background}>
        <input placeholder='Texto' ref={inputText} />
        <p ref={text}>Texto: {texto}</p>
        <button onClick={() => {setTexto(inputText.current.value)}}>Aceptar</button>
        <button onClick={() => {setSize(size + 5)}}>Aumentar</button>
        <button onClick={() => {setSize(size - 5)}}>Disminuir</button>
        <button onClick={() => {background.current.style.backgroundColor = "black"; text.current.style.color = "white"}}>Oscuro</button>
        <button onClick={() => {background.current.style.backgroundColor = "white"; text.current.style.color = "black"}}>Claro</button>
    </div>
  )
}
