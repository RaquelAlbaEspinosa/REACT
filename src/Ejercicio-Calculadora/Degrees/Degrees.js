import React, { useState } from 'react'
import "./Degrees.scss"

export const Degrees = () => {
    const [degrees, setDegrees] = useState();
    const[conversionType, setConversionType] = useState("ºC a ºF");
    const[res, setRes] = useState();

    const operate = () => {
        if(isNaN(degrees)){
            alert("Pon números, no me seas");
        } else {
            switch(conversionType){
                case "ºC a ºF":
                    setRes((degrees * 9 / 5) + 32);
                break;
                case "ºC a ºK":
                    setRes(degrees + 273,15);
                break;
                case "ºF a ºC":
                    setRes((degrees - 32) * 5 / 9);
                break;
                case "ºF a ºK":
                    setRes((degrees - 32) * 5 / 9 + 273,15);
                break;
                case "ºK a ºC":
                    setRes(degrees - 273,15);
                break;
                case "ºK a ºF":
                    setRes((degrees - 273,15) * 9 / 5 + 32);
                break;
            }
        }
    }

    const clean = () => {
        setDegrees(0);
        setConversionType("ºC a ºF");
        setRes();
    }

  return (
    <div className='conversor'>
        <h1>Conversor</h1>
        <hr />
        <h2>{conversionType}</h2>
        <input 
            type="text"
            placeholder='Grados'
            onChange={(e) => setDegrees(e.target.value)}
            value={degrees}
        />
        <div className="botones">
            <button onClick={() => setConversionType("ºC a ºF")} className={conversionType === "ºC a ºF" && "selected"}>ºC a ºF</button>
            <button onClick={() => setConversionType("ºC a ºK")} className={conversionType === "ºC a ºK" && "selected"}>ºC a ºK</button>
            <button onClick={() => setConversionType("ºF a ºC")} className={conversionType === "ºF a ºC" && "selected"}>ºF a ºC</button>
            <button onClick={() => setConversionType("ºF a ºK")} className={conversionType === "ºF a ºK" && "selected"}>ºF a ºK</button>
            <button onClick={() => setConversionType("ºK a ºC")} className={conversionType === "ºK a ºC" && "selected"}>ºK a ºC</button>
            <button onClick={() => setConversionType("ºK a ºF")} className={conversionType === "ºK a ºF" && "selected"}>ºK a ºF</button>
        </div>
        <div className="operar">
            <button onClick={operate}>Calcular</button>
            <button onClick={clean}>Limpiar</button>
        </div>
        <h2>Resultado conversión: {res}</h2>
    </div>
  )
}
