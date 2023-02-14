import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// react bootstrap se debe instalar 
import "./FormularioApp.scss";

export const FormularioApp = () => {
    const [coche, setCoche] = useState({
        marca: "",
        modelo: "",
        matricula: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setCoche({...coche, [name]:value});
        // aquí el corchete no es un array, es la manera en la que diré que voy a meter una clave dinámica
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className='p-5' action="">
        <h1>Explicación useState con objetos</h1>
        <hr />
        <form className='formulario'>
            <label htmlFor="Marca">Marca</label>
            <input 
                type="text" 
                placeholder='Marca' 
                id="Marca" 
                value={coche.marca}
                name="marca"
                onChange={handleChange}
            />
            <label htmlFor="Modelo">Modelo</label>
            <input 
                type="text" 
                placeholder='Modelo' 
                id="Modelo" 
                value={coche.modelo}
                name="modelo"
                onChange={handleChange}
            />
            <label htmlFor="Matricula">Matrícula</label>
            <input 
                type="text" 
                placeholder='Matrícula' 
                id="Matricula" 
                value={coche.matricula}
                name="matricula"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Aceptar</button>
        </form>
    </div>
  )
}
