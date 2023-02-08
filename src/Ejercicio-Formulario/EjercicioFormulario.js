import React, { useState } from 'react'
import "./EjercicioFormulario.scss"

export const EjercicioFormulario = () => {
    const [texto, setTexto] = useState("");
    const [textoEscrito, setTextoEscrito] = useState("");
    const [color, setColor] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [bool, setBool] = useState(false);


    const handleChange1 = (event) => {
        setTexto(event.target.value);
    }

    const sendInfo = () => {
        setTextoEscrito(texto);
    }

    const clean = () => {
        setTexto("");
        setTextoEscrito("");
    }
    console.log(color);
    console.log(selectedColor);
    const handleChange2 = (event) => {
        setColor(event.target.value);
    }

    const selectColor = () => {
        let colorMinus = color.toLocaleLowerCase();
        setSelectedColor(colorMinus);
        if(colorMinus === "verde" || colorMinus === "rosa" || colorMinus === "azul" || colorMinus === "amarillo"){
            setBool(false);
        } else {
            setBool(true);
        }
    }

  return (
    <div className='todo'>
        <div className="escritura">
            <div className="escribir">
                <h1>Mostrar texto</h1>
                <input 
                    type="text" 
                    placeholder='Escribe aquí' 
                    onChange={handleChange1}
                    value={texto}
                />
                <br />
                <br />
                <button onClick={sendInfo} disabled={texto === "" && "disabled"}>Escribir</button>
                <button onClick={clean} disabled={texto === "" && "disabled"}>Limpiar</button>
            </div>
            <div className='pantalla'>
                <p>{textoEscrito}</p>
            </div>
        </div>
        <div className={`colores ${selectedColor}`}>
            <h1>Cambiar el color (verde, azul, amarillo, rosa)</h1>
            {bool && <p className='warning'>Te has equivocado!!!</p>}
            <input 
                type="text"
                placeholder='color'
                onChange = {handleChange2}
                value={color}
            />
            <button onClick={selectColor}>Cambiar color</button>
        </div>
    </div>
  )
}
